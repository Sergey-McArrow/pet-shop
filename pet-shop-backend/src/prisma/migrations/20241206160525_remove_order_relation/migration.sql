/*
  Warnings:

  - You are about to drop the column `orderId` on the `Product` table. All the data in the column will be lost.
  - Made the column `categoryId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productIds" INTEGER[];

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "orderId",
ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
