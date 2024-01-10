import "./App.css";
import ProductForm from "./components/ProductForm";
import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  return (
    <>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} setProducts={setProducts} />
    </>
  );
}

export default App;
