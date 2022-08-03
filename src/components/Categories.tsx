import { Link } from "react-router-dom";
import { Category } from "../App";

type Props = {
  categories: Category[];
};

export function Categories({ categories }: Props) {
  return (
    <section className="categories-container main-wrapper">
      <ul className="categories-container__list">
        {categories.map((category) => (
          <li key={category.id} className="category-list">
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
