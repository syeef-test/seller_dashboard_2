import React from "react";

const ProductList = ({ products, setProducts }) => {
  const categories = ["Electronics", "Foods", "Skincare"];

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  return (
    <>
      <h2>Products</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {products
            .filter((product) => product.category === category)
            .map((filteredProduct) => (
              <div key={filteredProduct.id}>
                <p>Id: {filteredProduct.id}</p>
                <p>Name: {filteredProduct.product_name}</p>
                <p>Price: {filteredProduct.price}</p>
                <button onClick={() => handleDelete(filteredProduct.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};

export default ProductList;
