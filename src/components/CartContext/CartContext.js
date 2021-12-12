import React, {useState} from 'react'
import { createContext } from 'react'
import { items } from '../ItemDetailContainer/ItemDetailContainer';




export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [Items, setItems] = useState([])

    const isInCart = (itemID) => {
        const found = Items.find(item => item.id === itemID)
        return found
    }

    const addItem = (item, cantidad) => {
        isInCart(item.id)
        ?
        setItems(Items.map((prod) => {
            if (prod.id === item.id){
                prod.cantidad += item.cantidad
            } 
        }))
        :
        setItems([...Items, {id : item.id, nombre: item.nombre, precio: item.precio, cantidad: cantidad}])
    }

    // const deleteItem = (itemID, cantidad) => {

    // }

    // const quantityItem = () => {

    // }
    



    return (
        <CartContext.Provider value={{
            Items,
            addItem
            // deleteItem,
            // quantityItem
            // totalPrice,
            // emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


