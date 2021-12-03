import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

  

  return (
    <div>
         <Card>
        <Image
          src={item.imagen}
          alt="Whats-App-Image-2021-11-17-at-22-57-24"
          border="0"
          wrapped
          ui={false}
          className="imagenConfig"
        />
        <Card.Content>
          <Card.Header>{item.nombre}</Card.Header>
          <Card.Meta>
            <span className="date">{item.precio}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <ItemCount stock={item.stock} />
          <br></br>
            <br></br>
            <Button content="Comprar" secondary />
            <br></br>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemDetail;
