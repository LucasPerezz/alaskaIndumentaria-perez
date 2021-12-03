import React from 'react'
import './ItemList.css'


import Item from '../Item/Item'
import { Link } from 'react-router-dom';

const ItemList = ( {productos} ) => {

  return(
    <div className="container cardsContainer">
    {productos.map((producto) => {
      return(
        <Link to={`/detail/${[producto.id]}`}>
         <Item info={producto} key={producto.id}/>
         </Link>
         )
    })}
    </div>

  )
};


export default ItemList
