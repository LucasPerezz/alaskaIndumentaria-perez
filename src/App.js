import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import Nabvar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./components/CartContext/CartContext";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CartProvider>
          <Router>
            <Nabvar />
            <Routes>
              <Route path="/genero/:generoID" element={<ItemListContainer />} />
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </CartProvider>
      </Fragment>
    );
  }
}

export default App;
