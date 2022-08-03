import { Product } from "../App";

type Props = {
  basketProduct: Product;
  setTotal: Function;
  total: number;
};

export function BasketProduct({ basketProduct, setTotal, total }: Props) {
  setTotal(total + basketProduct.price);
  return (
    <li>
      <article className="basket-container__item">
        <img src={basketProduct.image} alt={basketProduct.title} width="90" />
        <p>{basketProduct.title}</p>
        <p>
          Qty:
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
        <p>Item total: £109.95</p>
      </article>
    </li>
  );
}
