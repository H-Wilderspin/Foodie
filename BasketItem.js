import React from 'react'
import { ContextWhole } from './context'
import plus from './imgs/icons/plus.svg'
import minus from './imgs/icons/minus.svg'

export default function BasketItem({ item}) {
    const { addToCart, removeFromCart, currency } = React.useContext(ContextWhole)
    const price = item.price * currency.value
    const priceFormat = price.toLocaleString("en-UK", {style: "currency", currency: currency.name})

    return (
        <div className='BasketItem-container'>
            <img className='BasketItem-img' src={item.img} />
            <span className='BasketItem-name'>{item.name}</span>
            <span className='BasketItem-price'>{priceFormat}</span>
            <div className='BasketItem-qtyControls'>
                <img
                    className='MenuItem-minusBtn'
                    src={minus}
                    onClick={() => removeFromCart(item)}
                    alt="minus"
                />
                <span className='BasketItem-qty'>
                    {item.quantity}
                </span>
                <img
                    className='MenuItem-plusBtn'
                    src={plus}
                    onClick={() => addToCart(item)}
                    alt="plus"
                />

            </div>
            
        </div>
    )
}