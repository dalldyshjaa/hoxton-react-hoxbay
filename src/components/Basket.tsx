import { useState } from "react";
import { Product } from "../App";
import { BasketProduct } from "./BasketProduct";
type Props = {
  onBasket: Product[];
};

export function Basket({ onBasket }: Props) {
  const [total, setTotal] = useState(0);
  return (
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {onBasket.map((basketProduct) => (
          <BasketProduct basketProduct={basketProduct} key={basketProduct.id} />
        ))}
      </ul>
      <h3>Your total: {`$${total.toFixed(2)}`}</h3>
    </section>
  );
}
