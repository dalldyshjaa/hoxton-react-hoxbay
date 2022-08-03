import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Product } from "../App";

export function SingleProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const param = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${param.productId}`)
      .then((resp) => resp.json())
      .then((product: Product) => setProduct(product));
  }, []);

  if (product === null) return <h1>Loading...</h1>;

  if (product !== null)
    return (
      <section className="product-detail main-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="product-detail__side">
          <h3></h3>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button>Add to basket</button>
        </div>
      </section>
    );
}
