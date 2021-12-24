import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button, Header } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";

import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = () => {
    setAdd(!add);
  };

  return (
    <div className="ItemDetailStyle">
      <div className="ItemDetailImage">
        <Image src={item.imagen} size="big" alt={item.nombre} />
      </div>

      <div className="ItemDetailInfo">
        <Header as="h1" className="ItemDetailName">
          {item.nombre}
        </Header>
        <Header as="h2" className="ItemDetailPrice">
          ${item.precio}
        </Header>

        <div className="my-5">
          {add ? (
            <div>
              <Card.Header className="my-5 d-flex justify-content-center fs-3">
                Añadido
              </Card.Header>
              <Link to="/">
                <Button
                  content="Continuar Comprando"
                  secondary
                  size="fluid"
                  className="my-2"
                />
              </Link>
              <div>
                <Link to="/cart">
                  <Button content="Finalizar Compra" secondary size="fluid" />
                </Link>
              </div>
            </div>
          ) : (
            <ItemCount
              item={item}
              stock={item.stock}
              addItem={addItem}
              onAdd={onAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
