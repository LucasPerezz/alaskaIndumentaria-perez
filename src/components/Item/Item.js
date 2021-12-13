import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


const Item = ({ info, addItem, item }) => {
  return (
    <div>
      <Card key={info.id}>
        <Image
          src={info.imagen}
          alt="Whats-App-Image-2021-11-17-at-22-57-24"
          border="0"
          wrapped
          ui={false}
          className="imagenConfig"
        />
        <Card.Content>
          <Card.Header>{info.nombre}</Card.Header>
          <Card.Meta>
            <span className="date">${info.precio}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/item/${info.id}`}>
            <br></br>
            <Button content="Comprar" secondary />
            <br></br>
          </Link>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Item;
