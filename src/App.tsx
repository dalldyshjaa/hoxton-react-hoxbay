import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import { Basket } from "./components/Basket";
import { Categories } from "./components/Categories";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  image: string;
  description: string;
};

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route index element={<Navigate to="/products" />} />
            <Route path="/products" element={<Home products={products} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
