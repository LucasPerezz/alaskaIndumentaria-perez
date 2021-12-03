import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidjet from './../CartWidjet/CartWidjet'


function Nabvar () {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand position-absolute mx-4 tittleFontType" href="/">Alaska Indumentaria</a>
    <div class="collapse navbar-collapse justify-content-center container-fluid" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" className="nav-link active fontType nav-link" aria-current="page">Inicio</Link>
        </li>
        <li class="nav-item">
        <Link to="/genero/mujer" className="nav-link active fontType nav-link" aria-current="page">Mujer</Link>
        </li>
        <li class="nav-item">
        <Link to="/genero/hombre" className="nav-link active fontType nav-link" aria-current="page">Hombre</Link>
        </li>
        <li class="nav-item">
        <Link to="/contacto" className="nav-link active fontType nav-link" aria-current="page">Contacto</Link>
        </li>
      </ul>
    </div>
    <CartWidjet />
</nav>
    ) 
}


export default Nabvar

