import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [product_name, setProductName] = useState("");
  const [category, setCategory] = useState("Electronics");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id,
      price,
      product_name,
      category,
    };
    addProduct(newProduct);
    setId("");
    setPrice("");
    setProductName("");
    setCategory("electronics");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Selling Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Name"
        value={product_name}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Electronics">Electronics</option>
        <option value="Foods">Foods</option>
        <option value="Skincare">Skincare</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
