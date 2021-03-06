import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";
import "./CartWidjet.css";

const CartWidjet = () => {
  const { items } = useContext(CartContext);
  let itemsInCart = 0;

  items.map((item) => {
    return itemsInCart = itemsInCart + item.counter;
  });

  return (
    <>
    <div className="cartImage">
        <div className="itemsInCart text-dark">{itemsInCart}</div>
        <Icon disabled name="shopping bag" className="iconColor" size="big" />
      </div>
    
    </>
  );
};

export default CartWidjet;
