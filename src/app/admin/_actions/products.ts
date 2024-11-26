"use server";

import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const addSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  priceInCents: z.coerce
    .number()
    .int()
    .min(1, "Price must be greater than zero"),
  file: z
    .instanceof(File, { message: "File is required" })
    .refine((file) => file.size > 0, { message: "File cannot be empty" }),
  images: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size > 0, "Image cannot be empty")
    )
    .nonempty({ message: "At least one image is required" }),
  videoUrl: z.string().url("Invalid video URL").optional(),
});

type ProcessedFormData = {
  name: string;
  description: string;
  priceInCents: number;
  file: File | null;
  images: File[];
  videoUrl: string;
};

const preprocessFormData = (formData: FormData): ProcessedFormData => {
  return {
    name: (formData.get("name") as string) || "",
    description: (formData.get("description") as string) || "",
    priceInCents: Number(formData.get("priceInCents")) || 0,
    file: formData.get("file") as File,
    images: formData.getAll("images") as File[],
    videoUrl: (formData.get("videoUrl") as string) || "",
  };
};

export async function addProduct(prevState: unknown, formData: FormData) {
  const processedData = preprocessFormData(formData);
  const result = addSchema.safeParse(processedData);

  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("products", { recursive: true });
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));

  const imagePaths: string[] = [];
  await fs.mkdir("public/products", { recursive: true });
  for (const image of data.images) {
    const imagePath = `/products/${crypto.randomUUID()}-${image.name}`;
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await image.arrayBuffer())
    );
    imagePaths.push(imagePath);
  }

  const product = await db.product.create({
    data: {
      isAvailableForPurchase: false,
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath,
      videoUrl: data.videoUrl,
    },
  });

  const imageEntries = imagePaths.map((imagePath) => ({
    productId: product.id,
    imagePath: imagePath,
  }));

  await db.productImage.createMany({
    data: imageEntries,
  });

  revalidatePath("/families");

  redirect("/admin/products");
}

const editSchema = addSchema.extend({
  file: z.instanceof(File, { message: "File is required" }).optional(),
  images: z.array(z.instanceof(File)).optional(),
});

export async function updateProduct(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const processedData = preprocessFormData(formData);
  const result = editSchema.safeParse(processedData);
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const product = await db.product.findUnique({ where: { id } });

  if (product == null) return notFound();

  let filePath = product.filePath;
  if (data.file != null && data.file.size > 0) {
    await fs.unlink(product.filePath);
    filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
    await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));
  }

  const imagesUpdated = formData.get("imagesUpdated") === "true";

  if (data.images != null && imagesUpdated) {
    const oldImages = await db.productImage.findMany({
      where: { productId: product.id },
    });
    for (const image of oldImages) {
      await fs.unlink(`public${image.imagePath}`);
    }
    await db.productImage.deleteMany({
      where: { productId: product.id },
    });

    const imagePaths: string[] = [];
    for (const image of data.images) {
      const imagePath = `/products/${crypto.randomUUID()}-${image.name}`;
      await fs.writeFile(
        `public${imagePath}`,
        Buffer.from(await image.arrayBuffer())
      );
      imagePaths.push(imagePath);
    }

    const imageEntries = imagePaths.map((imagePath) => ({
      productId: product.id,
      imagePath: imagePath,
    }));

    await db.productImage.createMany({
      data: imageEntries,
    });
  }

  await db.product.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath,
      videoUrl: data.videoUrl,
    },
  });

  revalidatePath("/families");

  redirect("/admin/products");
}

export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean
) {
  await db.product.update({ where: { id }, data: { isAvailableForPurchase } });

  revalidatePath("/families");
}

export async function deleteProduct(id: string) {
  const productImages = await db.productImage.findMany({
    where: { productId: id },
  });
  for (const image of productImages) {
    await fs.unlink(`public${image.imagePath}`);
  }

  const product = await db.product.delete({ where: { id } });
  if (product == null) return notFound();
  await fs.unlink(product.filePath);

  revalidatePath("/families");
}
