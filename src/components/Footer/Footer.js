import React from "react";
import { Link } from "react-router-dom";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <div class="container footerSetUp">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <Link to='/'>
                <p class="nav-link px-2 text-muted">Home</p>
                </Link>
            </li>
            <li class="nav-item">
                <Link to='/productos'>
                <p class="nav-link px-2 text-muted">Productos</p>
                </Link>
            </li>
            <li class="nav-item">
              <Link to="/genero/mujer">
            <p class="nav-link px-2 text-muted">Mujer</p>
            </Link>
            </li>
            <li class="nav-item">
              <Link to="/genero/hombre">
            <p class="nav-link px-2 text-muted">Hombre</p>
            </Link>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; 2022 Alaska indumentaria</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
