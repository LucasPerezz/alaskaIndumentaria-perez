import "./Cart.css";
import React, { useContext } from "react";
import { Table, Button } from "semantic-ui-react";

//CONTEXT
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {
  const { items, removeItem, clearItems, TotalPriceItems, productQuantity } =
    useContext(CartContext);
  console.log(items);

  return (
    <div>
      <Table singleLine className="my-5 container">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="widthTable">Imagen</Table.HeaderCell>
            <Table.HeaderCell className="widthTable">Producto</Table.HeaderCell>
            <Table.HeaderCell className="widthTable">Cantidad</Table.HeaderCell>
            <Table.HeaderCell className="widthTable">Precio</Table.HeaderCell>
            <Table.HeaderCell className="widthTable"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => {
            return (
              <Table.Row>
                <Table.Cell className="widthTable">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="imageCart"
                  ></img>
                </Table.Cell>
                <Table.Cell className="widthTable">{item.nombre}</Table.Cell>
                <Table.Cell className="widthTable">{item.counter}</Table.Cell>
                <Table.Cell className="widthTable">${item.precio}</Table.Cell>
                <Table.Cell>
                  <Button primary onClick={() => removeItem(item.id)}>
                    X
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
          <Table.Row>
            <Table.Cell className="widthTable"></Table.Cell>
            <Table.Cell className="widthTable"></Table.Cell>
            <Table.Cell className="widthTable">{productQuantity()}</Table.Cell>
            <Table.Cell className="widthTable">${TotalPriceItems()}</Table.Cell>
            <Table.Cell className="widthTable">
              <Button
                content="Limpiar carrito"
                secondary
                onClick={() => clearItems()}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Cart;
