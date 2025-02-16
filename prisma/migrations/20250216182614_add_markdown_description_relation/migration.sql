/*
  Warnings:

  - Added the required column `markdownContent` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "markdownContent" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
