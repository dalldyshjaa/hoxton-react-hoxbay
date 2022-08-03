import { useParams } from "react-router-dom";
import { Product } from "../App";
import { StoreProduct } from "./StoreProducts";

type Props = {
  products: Product[];
};

export function SearchedProducts({ products }: Props) {
  let { search } = useParams<string>();
  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products
          .filter((product: Product) =>
            product.title.toLowerCase().includes(search!)
          )
          .map((product: Product) => (
            <StoreProduct product={product} key={product.id} />
          ))}
      </ul>
    </section>
  );
}
