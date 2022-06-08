import React, { useState } from 'react'
import '../Navbar/NavbarMobile.css'
import { Link } from 'react-router-dom'

const NavbarMobile = () => {


    const [ pageActive, setPageActive ] = useState('')

    const pageActiveChange = (page) => {
        setPageActive(page)
    }



  return (
    <>
        <nav>
            <ul className='navbarContai'>
                <Link to="/">
                    <li onClick={() => pageActiveChange('hombre')} className={pageActive === 'home' ? "navbarContaiActive" : "navbarContaiDesactive"}>Home</li>            
                </Link>
                <Link to="/genero/hombre">
                    <li onClick={() => pageActiveChange('hombre')} className={pageActive === 'hombre' ? "navbarContaiActive" : "navbarContaiDesactive"}>Hombre</li>         
                </Link>
                <Link to="/genero/mujer">
                    <li onClick={() => pageActiveChange('mujer')} className={pageActive === 'mujer' ? "navbarContaiActive" : "navbarContaiDesactive"}>Mujer</li>           
                </Link>
                    <li onClick={() => pageActiveChange('shopping')} className={pageActive === 'shopping' ? "navbarContaiActive" : "navbarContaiDesactive"}>Shopping</li> 
            </ul>
        </nav>
    </>
  )
}

export default NavbarMobile