"use client";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProductListProps {
  title: string; //titulo da area, sendo dinamico para permitir ter mais de um valor, ("mais vendios" "tendencias" dependendo da pagina)
  products: (typeof productTable.$inferSelect & {
    //Pega a tabela de produtos e retorna lista de registros da tabla
    variants: (typeof productVariantTable.$inferSelect)[]; //Variante para cada produto  criado
  })[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {/* Permite escrolar horizontalmente  */}
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
