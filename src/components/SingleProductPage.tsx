import { useEffect, useState } from "react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { Product } from "../App";

type Props = {
  addToBasket: Function;
};

export function SingleProductPage({ addToBasket }: Props) {
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const param = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${param.productId}`)
      .then((resp) => resp.json())
      .then((product: Product) => setProduct(product));
  }, []);
  if (!product) return null;
  return (
    <section className="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div className="product-detail__side">
        <h3></h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>

        <button
          onClick={() => {
            addToBasket(product);
            navigate("/basket");
          }}
        >
          Add to basket
        </button>
      </div>
    </section>
  );
}
