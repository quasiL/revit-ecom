"use server";

import db from "@/db/db";
import OrderHistoryEmail from "@/email/OrderHistory";
import { Resend } from "resend";
import { z } from "zod";

const emailSchema = z.string().email();
const resend = new Resend(process.env.RESEND_API_KEY as string);

type Product = {
  id: string;
  name: string;
  imagePath: string;
  description: string;
};

type Order = {
  pricePaidInCents: number;
  id: string;
  createdAt: Date;
  product: Product;
  downloadVerificationId?: string;
};

type User = {
  email: string;
  orders: Order[];
};

export async function emailOrderHistory(
  prevState: unknown,
  formData: FormData
): Promise<{ message?: string; error?: string }> {
  const result = emailSchema.safeParse(formData.get("email"));

  if (!result.success) {
    return { error: "Invalid email address" };
  }

  const user: User | null = await db.user.findUnique({
    where: { email: result.data },
    select: {
      email: true,
      orders: {
        select: {
          pricePaidInCents: true,
          id: true,
          createdAt: true,
          product: {
            select: {
              id: true,
              name: true,
              imagePath: true,
              description: true,
            },
          },
        },
      },
    },
  });

  if (user == null) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      message:
        "Check your email to view your order history and download your products.",
    };
  }

  const orders = await Promise.all(
    user.orders.map(async (order) => {
      const downloadVerification = await db.downloadVerification.create({
        data: {
          expiresAt: new Date(Date.now() + 24 * 1000 * 60 * 60),
          productId: order.product.id,
        },
      });

      return {
        ...order,
        downloadVerificationId: downloadVerification.id,
      };
    })
  );

  const data = await resend.emails.send({
    from: `Support <${process.env.SENDER_EMAIL}>`,
    to: user.email,
    subject: "Order History",
    react: <OrderHistoryEmail orders={orders} />,
  });

  if (data.error) {
    return {
      error: "There was an error sending your email. Please try again.",
    };
  }

  return {
    message:
      "Check your email to view your order history and download your products.",
  };
}
