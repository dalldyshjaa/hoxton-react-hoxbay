import { Product } from "../App";
import { useParams } from "react-router-dom";
import { StoreProduct } from "./StoreProducts";

type Props = {
  products: Product[];
};
export function ProductsByCat({ products }: Props) {
  const param = useParams();
  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products
          .filter(
            (product: Product) =>
              product.categoryId === Number(param.categoryId)
          )
          .map((product: Product) => (
            <StoreProduct product={product} key={product.id} />
          ))}
      </ul>
    </section>
  );
}
