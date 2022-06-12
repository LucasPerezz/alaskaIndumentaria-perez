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
                <Link to="/remeras">
                    <li onClick={() => pageActiveChange('remeras')} className={pageActive === 'remeras' ? "navbarContaiActive" : "navbarContaiDesactive"}>Remeras</li>         
                </Link>
                <Link to="/buzos">
                    <li onClick={() => pageActiveChange('buzos')} className={pageActive === 'buzos' ? "navbarContaiActive" : "navbarContaiDesactive"}>Buzos</li>           
                </Link>
                <Link to="/shorts">
                    <li onClick={() => pageActiveChange('shorts')} className={pageActive === 'shorts' ? "navbarContaiActive" : "navbarContaiDesactive"}>Shorts</li>           
                </Link>
                <Link to="/jeans">
                    <li onClick={() => pageActiveChange('jeans')} className={pageActive === 'jeans' ? "navbarContaiActive" : "navbarContaiDesactive"}>Jeans</li>           
                </Link>
                <Link to="/camperas">
                    <li onClick={() => pageActiveChange('camperas')} className={pageActive === 'camperas' ? "navbarContaiActive" : "navbarContaiDesactive"}>Camperas</li>           
                </Link>
                <Link to="/pantalones">
                    <li onClick={() => pageActiveChange('pantalones')} className={pageActive === 'pantalones' ? "navbarContaiActive" : "navbarContaiDesactive"}>Pantalones</li>           
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