import React from "react";
import "./ItemList.css";

import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container cardsContainer">
      {productos.map((producto) => {
        return <Item info={producto} />;
      })}
    </div>
  );
};

export default ItemList;
