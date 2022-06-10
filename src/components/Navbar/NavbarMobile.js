import React, { useState } from 'react'
import '../Navbar/NavbarMobile.css'
import { Link } from 'react-router-dom'

const NavbarMobile = () => {


    const [ pageActive, setPageActive ] = useState()

    const pageActiveChange = (page) => {
        setPageActive(page)
    }


  return (
    <>
        <nav>
            <ul className='navbarContai'>
                <Link to="/">
                    <li onClick={() => pageActiveChange('')} className={pageActive === '' ? "navbarContaiActive" : "navbarContaiDesactive"}>Home</li>            
                </Link>
                <Link to="/productos">
                    <li onClick={() => pageActiveChange('home')} className={pageActive === 'home' ? "navbarContaiActive" : "navbarContaiDesactive"}>Nuestros productos</li>            
                </Link>
                <Link to="/genero/hombre">
                    <li onClick={() => pageActiveChange('hombre')} className={pageActive === 'hombre' ? "navbarContaiActive" : "navbarContaiDesactive"}>Hombre</li>         
                </Link>
                <Link to="/genero/mujer">
                    <li onClick={() => pageActiveChange('mujer')} className={pageActive === 'mujer' ? "navbarContaiActive" : "navbarContaiDesactive"}>Mujer</li>           
                </Link>
                <Link to="/cart">
                    <li onClick={() => pageActiveChange('shopping')} className={pageActive === 'shopping' ? "navbarContaiActive" : "navbarContaiDesactive"}>Shopping</li> 
                </Link>   
            </ul>
        </nav>
    </>
  )
}

export default NavbarMobile