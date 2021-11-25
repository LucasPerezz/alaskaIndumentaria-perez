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
        {productos.map((producto) => {
          return <ItemList info={producto} />
        })}
      </div>
    </div>


)
}

// const ItemListContainer = ( {nombreProducto, precioProducto, imagenProducto} ) => {

//   return (
//     <div>
//       <Card>
//         <Image src={imagenProducto} alt="Whats-App-Image-2021-11-17-at-22-57-24" border="0" wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>{nombreProducto}</Card.Header>
//           <Card.Meta>
//             <span className="date">{precioProducto}</span>
//           </Card.Meta>
//         </Card.Content>
//         <Card.Content extra>
//           <br></br>
//           <ItemCount
//           stockProducto="3"/>
//           <br></br>
//           <Button content='Comprar' secondary />
//         </Card.Content>
//       </Card>
//     </div>
//   );
// };

export default ItemListContainer;
