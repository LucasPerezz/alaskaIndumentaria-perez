import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        
        <img src="https://i.ibb.co/jMQCVCt/image-6487327.jpg" alt="" className='imageCon'/>
        <img src="https://i.ibb.co/3d8TJjp/1.jpg" alt="" className='imageMobile'/>
      <div className='homeContainer'>
          <p>Welcome <br /> to <br /> Alaska Indumentaria</p>
            <button><Link to="/productos">Nuestros Productos</Link></button> 
      </div>
    </>
  )
}

export default Home