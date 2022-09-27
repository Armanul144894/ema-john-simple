import React, { useEffect, useState } from "react";
import Product from "../components/Product/Product";
import "./Shop.css";
import Cart from "../components/Cart/Cart";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handelAddToCart = (product) => {
    const newOrder = [...order, product];
    setOrder(newOrder);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handelAddToCart={handelAddToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart order={order}></Cart>
      </div>
    </div>
  );
};

export default Shop;
