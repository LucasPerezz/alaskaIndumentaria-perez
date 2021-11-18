import './Navbar.css'
import CartWidjet from './../CartWidjet/CartWidjet'

function Nabvar () {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand position-absolute mx-4 tittleFontType" href="#">Alaska Indumentaria</a>
    <div class="collapse navbar-collapse justify-content-center container-fluid" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active fontType" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fontType" href="#">Mujer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fontType" href="#">Hombre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fontType" href="#">Contacto</a>
        </li>
      </ul>
    </div>
    <CartWidjet />
</nav>
    ) 
}


export default Nabvar

