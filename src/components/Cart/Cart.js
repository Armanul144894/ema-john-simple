import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <p className="order-summary">Order Summary</p>
      <div className="order-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total} </p>
        <p>Total Shipping Charge: {shipping}</p>
        <p>Tax: {tax}</p>
        <p>Grand Total: {grandTotal}</p>
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
  );
};

export default Cart;
