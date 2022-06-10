import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Item/Item.css";

const Item = ({ info, addItem, item }) => {
  return (
    <div>
      <Card key={info.id} className="itemContainer">
        <Image
          src={info.imagen}
          alt="Whats-App-Image-2021-11-17-at-22-57-24"
          border="0"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header className="my-1">
            <span className="letterProduct">{info.nombre}</span>
          </Card.Header>
          <Card.Meta className="my-2">
            <span className="letterPrice">${info.precio}</span>
          </Card.Meta>
        </Card.Content>
        <Link to={`/item/${info.id}`} className="buttonShop">
          <Button animated="vertical mb-4">
            <Button.Content hidden>Agregar</Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Item;
