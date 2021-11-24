import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer = ( {nombreProducto, precioProducto, imagenProducto, stockProducto} ) => {
  return (
    <div>
      <Card>
        <Image src={imagenProducto} alt="Whats-App-Image-2021-11-17-at-22-57-24" border="0" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{nombreProducto}</Card.Header>
          <Card.Meta>
            <span className="date">{precioProducto}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <br></br>
          <ItemCount />
          <br></br>
          <Button content='Comprar' secondary />

        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemListContainer;
