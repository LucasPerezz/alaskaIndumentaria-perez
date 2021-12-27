import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./CartWidjet.css";

const CartWidjet = () => {
  const { items } = useContext(CartContext);
  let itemsInCart = 0;

  items.map((item) => {
    return itemsInCart = itemsInCart + item.counter;
  });

  return (
    <Link to="/cart">
      <div className="cartImage">
        <div className="itemsInCart text-dark">{itemsInCart}</div>
        <Icon disabled name="shopping cart" color="black" size="big" />
      </div>
    </Link>
  );
};

export default CartWidjet;
