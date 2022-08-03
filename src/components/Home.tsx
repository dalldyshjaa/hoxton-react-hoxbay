import { Product } from "../App";
import { StoreProduct } from "./StoreProducts";
type Props = {
  products: Product[];
};

export function Home({ products }: Props) {
  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products.map((product: Product) => (
          <StoreProduct product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}
