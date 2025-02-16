-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "videoUrl" DROP NOT NULL;

-- CreateTable
CREATE TABLE "FreeProduct" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "videoUrl" TEXT,
    "productId" TEXT NOT NULL,

    CONSTRAINT "FreeProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FreeProduct_productId_key" ON "FreeProduct"("productId");

-- AddForeignKey
ALTER TABLE "FreeProduct" ADD CONSTRAINT "FreeProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
