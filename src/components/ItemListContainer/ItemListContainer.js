import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";




const ItemListContainer = () => {
  
  
  const [productos, setProductos] = useState ([])
  
  useEffect(() => {
    setTimeout(() => {
      fetch('Api.json')
      .then((Response) => Response.json())
      .then((json) => setProductos(json)) 
    }, 2000)
  }, [])
  
  
  return (
    
    
    <div className="container my-5">
      <div className="itemListContainer">
        <ItemList productos={productos}/>
      </div>
    </div>


)
}


export default ItemListContainer;
