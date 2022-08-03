import { Product } from "../App";

type Props = {
  product: Product;
};

export function StoreProduct({ product }: Props) {
  return (
    <li>
      <a href={`products/${product.id}`}>
        <article className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </article>
      </a>
    </li>
  );
}
