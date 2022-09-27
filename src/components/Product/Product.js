import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handelAddToCart, product } = props;
  const { name, img, seller, ratings, price } = props.product;
  return (
    <div className="cart-container">
      <img src={img} alt="" />
      <div className="cart-info">
        <div>
          <p className="product-name">{name}</p>
          <p className="price">Price: ${price}</p>
        </div>
        <div className="other-info">
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings}</p>
        </div>
      </div>
      <button onClick={() => handelAddToCart(product)} className="btn-cart">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
