import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ order }) => {
  return (
    <div>
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
  );
};

export default Cart;
