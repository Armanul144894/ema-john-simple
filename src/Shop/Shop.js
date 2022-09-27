import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Product from "../components/Header/Product/Product";
import "./Shop.css";

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
        <p className="order-summary">Order Summary</p>
        <div className="order-info">
          <p>Selected Items: {order.length}</p>
          <p>Total Price: </p>
          <p>Total Shopping Charge: </p>
          <p>Tax: </p>
          <p>Grand Total: </p>
        </div>
        <button className="btn-clear">
          <p>Clear Cart</p>
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </button>
        <br />
        <br />
        <button className="btn-review">
          <p>Review Order</p>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Shop;
