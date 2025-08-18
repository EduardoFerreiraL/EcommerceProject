import Link from "next/link";
import Image from "next/image";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface productItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
}

const ProductItem = ({ product }: productItemProps) => {
  const firstVariant = product.variants[0];
  console.log({ firstVariant });

  return (
    <Link href="/" className="flex flex-col gap-4">
      <div className="space-y-2">
        <Image
          src={firstVariant.imageUrl}
          alt={firstVariant.name}
          width={200}
          height={200}
          className="rounded-3xl"
        />
        <div className="flex max-w-[200px] flex-col gap-1">
          {" "}
          {/* max-w-[150px] para limitar o tamanho do texto */}
          <p className="truncate text-sm font-medium">{product.name}</p>{" "}
          {/* Truncade faz com que o texto nn quebre linha e sim coloco '...' no final' */}
          <p className="truncate text-xs text-muted-foreground font-medium">
            {product.description}
          </p>
          <p className="truncate text-sm font-semibold">
            {formatCentsToBRL(firstVariant.priceInCents)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
