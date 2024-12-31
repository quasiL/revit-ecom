import { formatCurrency } from "@/lib/formatters";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

type ProductCardProps = {
  id: string;
  name: string;
  priceInCents: number;
  description: string;
  images: { imagePath: string }[];
};

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  images,
}: ProductCardProps) {
  const imageSrc = images?.[0]?.imagePath;
  const imageAlt = `${name} image`;

  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" />
      </div>
      <CardHeader className="flex flex-col gap-1">
        <CardTitle>{name}</CardTitle>
        <CardTitle>{formatCurrency(priceInCents / 100)}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <CustomButton href={`/families/${id}/purchase`}>About</CustomButton>
      </CardFooter>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  );
}
