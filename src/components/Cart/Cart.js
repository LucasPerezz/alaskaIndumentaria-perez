import "./Cart.css";
import React, { useContext, Fragment } from "react";

//CONTEXT
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, clearItems, TotalPriceItems, productQuantity } =
    useContext(CartContext);
  console.log(items);

  return (
    <Fragment>
      <div className="cartContainer">
        <h2>AlaskaShop</h2>
        <div>
            {
              items.map((item) => {
                return(
                  <ul className="cartContentContainer">
                   <li><img src={item.imagen} alt={item.nombre} className="productImage"/></li>
                   <li>{item.nombre}</li>
                   <li>{item.counter}</li>
                   <li>${item.precio}</li>
                   <li onClick={() => removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg></li>
                  </ul>
                )
              })
            }
          <div className="positionFooter">
          <div className="cartFooter">
              <ul>
                <li></li>
                <li>TOTAL :</li>
                <li>{productQuantity()}u</li>
                <li>${TotalPriceItems()}</li>
                <li></li>
              </ul>
          </div>

          <div className="cartFooterButtons">
            <ul>
              <li><button onClick={() => clearItems()}>Eliminar todo</button></li>
              <Link to="/cart/checkout">
              <li><button>Finalizar compra</button></li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Cart;
