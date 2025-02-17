"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addProduct, updateProduct } from "../../_actions/products";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@prisma/client";
import MDEditor from "@uiw/react-md-editor";

export function ProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  );

  const [priceInCents, setPriceInCents] = useState<number | undefined>(
    product?.priceInCents
  );

  const [imagesUpdated, setImagesUpdated] = useState(false);

  document.documentElement.setAttribute("data-color-mode", "light");
  const [markdownContent, setMarkdownDescription] = useState<string>(
    product?.markdownContent || ""
  );

  const handleImageChange = () => {
    setImagesUpdated(true);
  };

  return (
    <form
      action={(formData: FormData) => {
        formData.append("imagesUpdated", imagesUpdated.toString());
        formData.append("markdownContent", markdownContent);
        action(formData);
      }}
      className="space-y-8"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ""}
        />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        {error.priceInCents && (
          <div className="text-destructive">{error.priceInCents}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description}
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" id="file" name="file" required={product == null} />
        {product != null && (
          <div className="text-muted-foreground">{product.filePath}</div>
        )}
        {error.file && <div className="text-destructive">{error.file}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="images">Images</Label>
        <Input
          type="file"
          id="images"
          name="images"
          multiple
          required={product == null}
          onChange={handleImageChange}
        />
        {error.images && <div className="text-destructive">{error.images}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="videoUrl">Video Url</Label>
        <Input
          type="text"
          id="videoUrl"
          name="videoUrl"
          defaultValue={product?.videoUrl || ""}
        />
        {error.videoUrl && (
          <div className="text-destructive">{error.videoUrl}</div>
        )}
      </div>
      <div className="">
        <MDEditor
          value={markdownContent}
          minHeight={100}
          onChange={(value) => setMarkdownDescription(value || "")}
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
