import React, { Fragment, useContext, useState } from "react";
import {
  Form,
  Button,
  Table,
  Input,
  Label,
  Message,
  Loader
} from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";
import { getFirestore } from "../services/getFirestore";





const Checkout = () => {
  const {productQuantity, TotalPriceItems} = useContext(CartContext)

  const { items } = useContext(CartContext);

  const infoClient = {
    nombre: " ",
    apellido: " ",
    celular: " ",
    email: " ",
    Cantidad: productQuantity(),
    Total: TotalPriceItems()
  };

  const [Client, setClient] = useState(infoClient);
  const [purchaseID, setPurchaseID] = useState("");
  const [Loading, setLoading] = useState(false);
  const shopConfirm = (e) => {
    const { name, value } = e.target;
    setClient({ ...Client, [name]: value, items});
  };

  const dataClient = async (e) => {
    setLoading(true);
    e.preventDefault();
    const db = getFirestore();
    const docRef = await db.collection("clientes").add(Client);
    setPurchaseID(docRef.id);

    setTimeout(() => {
      setLoading(false);
      setClient(infoClient);
      console.log(purchaseID);
    }, 2000);
  };

  return (
    <Fragment>
      <div>
        <Form className="w-50 mx-auto my-5" onSubmit={dataClient}>
          <Form.Field>
            <label>Nombre/s</label>
            <Input onChange={shopConfirm} name="nombre" value={Client.nombre} />
            <Label pointing>Ingrese su nombre</Label>
          </Form.Field>
          <Form.Field>
            <label>Apellido/s</label>
            <Input
              onChange={shopConfirm}
              name="apellido"
              value={Client.apellido}
            />
            <Label pointing>Ingrese su apellido</Label>
          </Form.Field>
          <Form.Field>
            <label>Celular</label>
            <Input
              onChange={shopConfirm}
              name="celular"
              value={Client.celular}
            />
            <Label pointing>Ingrese su numero de telefono</Label>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input onChange={shopConfirm} name="email" value={Client.email} />
            <Label pointing>Ingrese su correo electronico</Label>
          </Form.Field>
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
              {items.map((item) => {
                return (
                  <Table.Row>
                    <Table.Cell>
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-25"
                      ></img>
                    </Table.Cell>
                    <Table.Cell className="text-center">
                      ${item.precio}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Button
              type="submit"
              className="my-4 d-block mx-auto"
              onSubmit={dataClient}
            >
              Confirmar compra
            </Button>
          </div>
        </Form>

        <div className="w-25 mx-auto">
          {Loading ? (
            <Loader active inline className="mx-auto d-block" />
          ) : (
            purchaseID && (
              <Message icon>
                <Message.Content>
                  <Message.Header>Su id de compra es</Message.Header>
                  {purchaseID}
                </Message.Content>
              </Message>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
