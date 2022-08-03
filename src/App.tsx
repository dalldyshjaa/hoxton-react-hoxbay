import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import { Basket } from "./components/Basket";
import { Categories } from "./components/Categories";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import { StoreProduct } from "./components/StoreProducts";
import { SingleProductPage } from "./components/SingleProductPage";
import { ProductsByCat } from "./components/ProductsByCat";
import { SearchedProducts } from "./components/SearchedProducts";

export type Product = {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  image: string;
  description: string;
};
export type ProductOnCart = {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  image: string;
  description: string;
  quantity: number;
};
export type Category = {
  id: number;
  name: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [onBasket, setOnBasket] = useState<ProductOnCart[]>([]);

  function updateBasket(quantity: number, productId: number) {
    if (quantity) {
      let onBasketCopy: ProductOnCart[] = [...onBasket];
      let matchProduct: ProductOnCart = onBasketCopy.find(
        (prod) => prod.id === productId
      )!;
      matchProduct.quantity = quantity;
      setOnBasket(onBasketCopy);
    } else {
      let onBasketCopy: ProductOnCart[] = [...onBasket];
      let matchProduct: ProductOnCart = onBasketCopy.find(
        (prod) => prod.id === productId
      )!;
      onBasketCopy[onBasketCopy.indexOf(matchProduct)] =
        onBasketCopy[onBasketCopy.length - 1];
      onBasketCopy.pop();
      console.log(onBasketCopy);
      setOnBasket(onBasketCopy);
    }
  }

  function checkIfInBasket(product: ProductOnCart) {
    for (let prod of onBasket) {
      if (prod.id === product.id) return true;
    }
  }

  function addToBasket(product: ProductOnCart) {
    if (!checkIfInBasket(product)) {
      product.quantity = 1;
      setOnBasket([...onBasket, product]);
    } else {
      if (product.quantity < 4) {
        let onBasketCopy: ProductOnCart[] = [...onBasket];
        let matchProduct: ProductOnCart = onBasketCopy.find(
          (prod) => prod.id === product.id
        )!;
        matchProduct.quantity++;
        setOnBasket(onBasketCopy);
      } else {
        return false;
      }
    }
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
            <Route
              path="/basket"
              element={
                <Basket onBasket={onBasket} updateBasket={updateBasket} />
              }
            />
            <Route
              path="/search-products/:search"
              element={<SearchedProducts products={products} />}
            />
            <Route
              path="/search-products/:search/:productId"
              element={<SingleProductPage addToBasket={addToBasket} />}
            />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
