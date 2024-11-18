import db from "@/db/db";
import { Suspense } from "react";
import { Product } from "@prisma/client";
import { ProductCardSkeleton, ProductCard } from "@/components/ProductCard";
import { cache } from "@/lib/cache";

const getProducts = cache(
  () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { createdAt: "desc" },
    });
  },
  ["/families", "getProducts"]
  //{ revalidate: 60 * 60 * 24 }
);

export default function Families() {
  return (
    <main className="container mx-auto">
      <h2 className="text-3xl font-bold py-6">Families</h2>
      <ProductGridSection productsFetcher={getProducts} />
    </main>
  );
}

type ProductGridSectionProps = {
  productsFetcher: () => Promise<Product[]>;
};

function ProductGridSection({ productsFetcher }: ProductGridSectionProps) {
  return (
    <div className="mt-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense
          fallback={
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          }
        >
          <ProductSuspense productsFetcher={productsFetcher} />
        </Suspense>
      </div>
    </div>
  );
}

async function ProductSuspense({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>;
}) {
  return (await productsFetcher()).map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
}
