import React, { Fragment, useContext, useState } from "react";
import { Form, Button, Table } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";


const infoClient = {
    nombre: " ",
    Apellido: " ",
    Celular: " ",
    Email: " "
}

const Checkout = () => {
    const { items } = useContext(CartContext)
    const [Client, setClient] = useState(infoClient)

  return (
      <Fragment>
    <div>
      <Form className="w-50 mx-auto my-5">
        <Form.Field>
          <label>Nombre/s</label>
          <input placeholder="Ingrese su nombre" value={Client.nombre}/>
        </Form.Field>
        <Form.Field>
          <label>Apellido/s</label>
          <input placeholder="Ingrese su apellido" />
        </Form.Field>
        <Form.Field>
          <label>Celular</label>
          <input placeholder="Ingrese su numero" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Ingrese su correo electronico" />
        </Form.Field>
        <Button type="submit">Confirmar</Button>
      </Form>
    </div>
    <div className="w-50 mx-auto">
    <Table compact color="grey" inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Producto</Table.HeaderCell>
        <Table.HeaderCell>Precio</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    </Table>
    <Table.Body>
        {
            items.map((item) => {
                return(
                    <Table.Row>
                    <Table.Cell> 
                    <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-25"
                  ></img></Table.Cell>
                    <Table.Cell>${item.precio}</Table.Cell>
                  </Table.Row>
                )
            })
        }
    </Table.Body>

    </div>
    </Fragment>
  );
};

export default Checkout;
