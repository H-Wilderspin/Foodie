import React from 'react'
import menuData from './data'

const ContextWhole = React.createContext()
const { Provider, Consumer } = ContextWhole

function ContextProvider({ children }) {
    const thisAppName = "Menu"
    const [dataState, setDataState] = React.useState(menuData)
    const [currency, setCurrency] = React.useState({name: "GBP", value: 1})
    const converter = {
        GBP: {
            name: "GBP",
            value: 1},
        EUR: {
            name: "EUR",
            value: 1.2},
        USD: {
            name: "USD",
            value: 1.3}
        }

    function addToCart(NewItem) {

        setDataState(prevItems => {
            return prevItems.map((item) => {
                return item.id === NewItem.id ? { ...item, quantity: item.quantity + 1 } : item
            })
        })
    }

    function removeFromCart(oldItem) {
        const alreadyInCart = dataState.some(item => item.id === oldItem.id && item.quantity > 0)

        if (alreadyInCart && dataState.length > 0) {

            setDataState(prevItems => {
                return prevItems.map((item) => {
                    return item.id === oldItem.id ? { ...item, quantity: item.quantity - 1 } : item
                })
            })
        }
    }
    

    return (
        <Provider value={{thisAppName, dataState, addToCart, removeFromCart, currency, setCurrency, converter }}>
            {children}
        </Provider>
    )
}

export { ContextProvider, Consumer as ContextConsumer, ContextWhole }