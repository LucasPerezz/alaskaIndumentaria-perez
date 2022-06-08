import "./Navbar.css";
import { Link } from "react-router-dom";
import CartWidjet from "./../CartWidjet/CartWidjet";
import { useState } from "react";
import NavbarMobile from "./NavbarMobile";

function Nabvar() {

  const [toggle, setToggle] = useState(false)

  const applyToggle = () => {
      setToggle(!toggle)
  }


  return (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link to="/">
    //     <p class="navbar-brand position-absolute mx-4 tittleFontType">
    //       Alaska Indumentaria
    //     </p>
    //   </Link>
    //   <div
    //     class="collapse navbar-collapse justify-content-center container-fluid"
    //     id="navbarNav"
    //   >
    //     <ul class="navbar-nav">
    //       <li></li>
    //       <li class="nav-item">
    //         <Link
    //           to="/"
    //           className="nav-link active fontType nav-link"
    //           aria-current="page"
    //         >
    //           Inicio
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link
    //           to="/genero/mujer"
    //           className="nav-link active fontType nav-link"
    //           aria-current="page"
    //         >
    //           Mujer
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link
    //           to="/genero/hombre"
    //           className="nav-link active fontType nav-link"
    //           aria-current="page"
    //         >
    //           Hombre
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>

    // {/* CARD CartWidjet */}
    // </nav>

      <>
        <div className="navbarContainer container">
          <button className="menuButton" onClick={() => applyToggle()}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </button>
          <p className="fontType">Alaska Indumentaria</p>
          <CartWidjet />
        </div>
        {
            toggle && <NavbarMobile />
        }

      </>
  );
}

export default Nabvar;
