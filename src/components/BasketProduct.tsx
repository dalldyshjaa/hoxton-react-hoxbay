import { Product, ProductOnCart } from "../App";

type Props = {
  basketProduct: ProductOnCart;
  updateBasket: Function;
  updateTotal: Function;
};

export function BasketProduct({
  basketProduct,
  updateBasket,
  updateTotal,
}: Props) {
  updateTotal(basketProduct.price * basketProduct.quantity);
  return (
    <li>
      <article className="basket-container__item">
        <img src={basketProduct.image} alt={basketProduct.title} width="90" />
        <p>{basketProduct.title}</p>
        <p>
          Qty:
          <select
            onChange={(e) => {
              updateBasket(
                Number(e.target.options[e.target.selectedIndex].value),
                basketProduct.id
              );
            }}
          >
            {[0, 1, 2, 3].map((number) => (
              <option
                key={number}
                value={`${number}`}
                selected={basketProduct.quantity === number}
              >
                {" "}
                {number}
              </option>
            ))}
          </select>
        </p>
        <p>{`Item total: $${(
          basketProduct.price * basketProduct.quantity
        ).toFixed(2)}`}</p>
      </article>
    </li>
  );
}
