import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { Loader } from 'semantic-ui-react'



const ItemListContainer = () => {
  
  
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState(true)
  


  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch('Api.json')
      .then((Response) => Response.json())
      .then((json) => setProductos(json)); setLoading(false)
    }, 2000)
  }, [])

  
  
  return (
    
    
    <div className="container my-5">
      <div className="itemListContainer">
        {
          loading ?
          <Loader active />
          :

          <ItemList productos={productos}/>
          
        }
      </div>
    </div>


)
}


export default ItemListContainer;
