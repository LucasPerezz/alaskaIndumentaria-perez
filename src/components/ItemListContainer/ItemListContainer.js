import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import getFetch from "../../Fetch/getFetch";
import ItemList from "../ItemList/ItemList";
import { Loader } from 'semantic-ui-react'
import { useParams } from "react-router";



const ItemListContainer = () => {
  
  
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState(true)
  

  const {generoID} = useParams()

  useEffect(() => {
    if (generoID) {
      getFetch
      .then(res => {
        setProductos(res.filter(prod => prod.genero === generoID))
      })

      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    } else {
        getFetch
        .then(res => {
          setProductos(res)
        })

        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [generoID])
  
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     fetch('Api.json')
  //     .then((Response) => Response.json())
  //     .then((json) => setProductos(json)); setLoading(false)
  //   }, 2000)
  // }, [])

  
  
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
