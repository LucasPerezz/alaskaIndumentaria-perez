import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false)


  const {addItem} = useContext(CartContext)

  const onAdd = () => {
      setAdd(!add)
  };

  return (
    <div>
      <Card>
        <Image
          src={item.imagen}
          alt={item.nombre}
          border="0"
          wrapped
          ui={false}
          className="imagenConfig"
        />
        <Card.Content>
          <Card.Header>{item.nombre}</Card.Header>
          <Card.Meta>
            <span className="date">${item.precio}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="my-4">
            {
              add ?
              <div>
              <Card.Header>Añadido</Card.Header>
              <Link to="/">
              <Button
                content="Continuar Comprando"
                secondary
              />
              </Link>
              </div>
              :
              <ItemCount item={item} stock={item.stock} addItem={addItem} onAdd={onAdd}/>
            }
          </div>
          <div>
            <Link to="/cart">
            <Button
                content="Finalizar Compra"
                secondary
              />

            </Link>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemDetail;
