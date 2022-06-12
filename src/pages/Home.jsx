import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        
        <img src="https://i.ibb.co/xCzP2QK/99712d5d-7458-4f73-9ad9-71ba12d48ab9.jpg" alt="" className='imageCon'/>
        <img src="https://i.ibb.co/VWh6ry3/ad8546dd-5488-42d3-a6b7-8ce86d6a73a8.jpg" alt="" className='imageMobile'/>
      <div className='homeContainer'>
          <p>Welcome <br /> to <br /> Alaska Indumentaria</p>
            <button><Link to="/productos">Nuestros Productos</Link></button> 
      </div>
    </>
  )
}

export default Home