import React, { useContext } from 'react'

//CONTEXT
import { CartContext } from '../CartContext/CartContext'




const Cart = () => {
    const [Items, setItems] = useContext(CartContext)

    return (
        <div>
            {
                Items.map((item) => {
                    return (
                        <h1>{item.nombre}</h1>
                    )
                })
            }
        </div>
    )
}

export default Cart
