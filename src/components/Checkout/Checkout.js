import React, { Fragment, useContext, useState } from "react";
import { Form, Button, Table, Input, Label, Loader } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";
import { getFirestore } from "../services/getFirestore";



const infoClient = {
    nombre: " ",
    apellido: " ",
    celular: " ",
    email: " "
}

const Checkout = () => {
    const { items } = useContext(CartContext)
    const [Client, setClient] = useState(infoClient)
    const [purchaseID, setPurchaseID] = useState('')
    const [Loading, setLoading] = useState(false)

    const shopConfirm = (e) => {
      const { nombre, value } = e.target
      setClient({...Client, [nombre] : value})
      console.log(Client)
    }

    const dataClient = async (e) => {
      setLoading(true)
      e.preventDefault()
      const db = getFirestore()
      const docRef = db.collection('clientes').add(Client)

      setPurchaseID(docRef)
      setTimeout(() => {
        setLoading(false)
        setClient(infoClient)
      }, 1000)

    }


  return (
      <Fragment>
    <div>
      <Form className="w-50 mx-auto my-5" onSubmit={dataClient}>
        <Form.Field>
          <label>Nombre/s</label>
          <Input onChange={shopConfirm} name='nombre'/>
          <Label pointing>Ingrese su nombre</Label>
        </Form.Field>
        <Form.Field>
          <label>Apellido/s</label>
          <Input onChange={shopConfirm}/>
          <Label pointing>Ingrese su apellido</Label>
        </Form.Field>
        <Form.Field>
          <label>Celular</label>
          <Input onChange={shopConfirm}/>
          <Label pointing>Ingrese su numero de telefono</Label>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input onChange={shopConfirm}/>
          <Label pointing>Ingrese su correo electronico</Label>
        </Form.Field>
      </Form>

{/* <form className='form-container'>
				<Input
					className='form-input'
					placeholder='Name'
					name='name'
					value={Client.nombre}
					onChange={shopConfirm}
				/>
				<Input
					className='form-input'
					placeholder='LastName'
					name='lastName'
					value={Client.apellido}
					onChange={shopConfirm}
				/>
				<Input
					className='form-input'
					placeholder='Email'
					name='email'
					value={Client.celular}
					onChange={shopConfirm}
				/>
				<Input
					className='form-input'
					placeholder='Adress'
					name='adress'
					value={Client.email}
					onChange={shopConfirm}
				/>
				<Button className='form-btn' primary>
					Send
				</Button>
			</form> */}

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
    <Button type="submit" className="my-4 d-block mx-auto">Confirmar compra</Button>

            {
              Loading ? (
                <Loader active />
              ) 
              :
              purchaseID.id && (
                <div>
                    <p>purchaseID</p> 
                </div>
              )
            }
    </div>
    </Fragment>
  );
};

export default Checkout;
