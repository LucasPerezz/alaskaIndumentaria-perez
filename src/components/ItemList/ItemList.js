import React from 'react'
import { Card, Image, Button } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ( {info} ) => {


  return (
    <div>
      <Card>
        <Image src={info.imagen} alt="Whats-App-Image-2021-11-17-at-22-57-24" border="0" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{info.nombre}</Card.Header>
          <Card.Meta>
            <span className="date">{info.precio}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <br></br>
          <ItemCount stock={info.stock}/>
          <br></br>
          <Button content='Comprar' secondary />
        </Card.Content>
      </Card>
    </div>
  );
};


export default ItemList
