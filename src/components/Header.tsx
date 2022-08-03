import { Link, Navigate, NavLink, Route, useNavigate } from "react-router-dom";
import { getRandomColor } from "../helpers";
import { Home } from "./Home";

function Header() {
  const randomColor = getRandomColor();
  let navigate = useNavigate();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--border-colour"]: randomColor,
      }}
    >
      <div className="header__logo" style={{ color: randomColor }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/products">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
      <form
        action=""
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.input.value) {
            navigate(`search-products/${e.target.input.value.toLowerCase()}`);
          } else {
            navigate("/products");
          }
        }}
      >
        <input type="text" name="input" id="" placeholder="search" />
      </form>
    </header>
  );
}
export default Header;
