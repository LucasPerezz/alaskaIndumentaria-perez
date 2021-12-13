import React, {useState} from 'react'
import { createContext } from 'react'





export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find(item => item.id === id)
        return found
    }

    const addItem = ( item, counter) => {
        isInCart(item.id)
        ?
        setItems(items.map((prod) => {
            if(prod.id === item.id) {
                prod.counter += counter
                prod.precio = prod.precio * counter
            }
            return prod
        }))
        :
       setItems([...items, {id: item.id, nombre: item.nombre, precio: item.precio, imagen: item.imagen, counter: counter}])
       console.log(items)
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearItems = () => {
        setItems([])
    }


    return (
        <CartContext.Provider value={{
            items,
            addItem,
            removeItem,
            clearItems
        }}>
            {children}
        </CartContext.Provider>
    )
}


