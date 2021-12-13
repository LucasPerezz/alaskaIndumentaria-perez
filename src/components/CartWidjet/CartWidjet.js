import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import './CartWidjet.css'

const CartWidjet = () => {
    const {items} = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.counter
    })

    return (
       
        <div className="cartImage">
            <div className='itemsInCart'>
                {itemsInCart}
            </div>
            <Link to="/cart">
           <Icon disabled name='cart arrow down' size='big'/>
           </Link>
        </div>

        
    )
}

export default CartWidjet
