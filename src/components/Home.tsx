import { Product } from "../App";
type Props = {
  products: Product[];
};

export function Home({ products }: Props) {
  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products.map((product: Product) => (
          <li>
            <a href={`products/${product.id}`}>
              <article className="product-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
