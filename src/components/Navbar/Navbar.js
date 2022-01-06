import "./Navbar.css";
import { Link } from "react-router-dom";
import CartWidjet from "./../CartWidjet/CartWidjet";

function Nabvar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <p class="navbar-brand position-absolute mx-4 tittleFontType">
          Alaska Indumentaria
        </p>
      </Link>
      <div
        class="collapse navbar-collapse justify-content-center container-fluid"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li></li>
          <li class="nav-item">
            <Link
              to="/"
              className="nav-link active fontType nav-link"
              aria-current="page"
            >
              Inicio
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/genero/mujer"
              className="nav-link active fontType nav-link"
              aria-current="page"
            >
              Mujer
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/genero/hombre"
              className="nav-link active fontType nav-link"
              aria-current="page"
            >
              Hombre
            </Link>
          </li>
        </ul>
      </div>

      <CartWidjet />
    </nav>
  );
}

export default Nabvar;
