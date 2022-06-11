import "./Navbar.css";
import CartWidjet from "./../CartWidjet/CartWidjet";
import { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import Cart from "../Cart/Cart";

function Nabvar() {

  const [toggle, setToggle] = useState(false)
  const [cartToggle, setCartToggle] = useState(false)

  const applyToggle = () => {
      setToggle(!toggle)
  }

  const applyCartToggle = () => {
    setCartToggle(!cartToggle)
  }


  return (
        <>
        <div className="navbarContainer container">
          <button className="menuButton" onClick={() => applyToggle()}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list burguerMenu" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </button>
          <p className="fontType">Alaska Indumentaria</p>
          
          <button className="shoppingCart" onClick={() => applyCartToggle()} >
          <CartWidjet />
          </button>
          
        </div>
        {
            toggle && <NavbarMobile toggle={toggle}/>
        }
        {
          cartToggle && <Cart />
        }
      </>

  );
}

export default Nabvar;
