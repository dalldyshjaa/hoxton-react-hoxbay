import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import { Basket } from "./components/Basket";
import { Categories } from "./components/Categories";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import { StoreProduct } from "./components/StoreProducts";
import { SingleProductPage } from "./components/SingleProductPage";
import { ProductsByCat } from "./components/ProductsByCat";

export type Product = {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  image: string;
  description: string;
};
export type Category = {
  id: number;
  name: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [onBasket, setOnBasket] = useState<Product[]>([]);

  function addToBasket(product: Product) {
    setOnBasket([...onBasket, product]);
  }

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));
    fetch("http://localhost:4000/categories")
      .then((resp) => resp.json())
      .then((categories) => setCategories(categories));
  }, []);
  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route index element={<Navigate to="/products" />} />
            <Route path="/products" element={<Home products={products} />} />
            <Route
              path="/products/:productId"
              element={<SingleProductPage addToBasket={addToBasket} />}
            />
            <Route
              path="/categories/:categoryId"
              element={<ProductsByCat products={products} />}
            />
            <Route
              path="/categories/:categoryId/:productId"
              element={<SingleProductPage addToBasket={addToBasket} />}
            />
            <Route
              path="/categories"
              element={<Categories categories={categories} />}
            />
            <Route path="/basket" element={<Basket onBasket={onBasket} />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
