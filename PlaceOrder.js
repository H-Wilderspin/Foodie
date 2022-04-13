import React from 'react'
import Header from '../ReusableComponents/Header'
import Footer from '../ReusableComponents/Footer';
import BasketItem from './BasketItem';
import { Link } from 'react-router-dom';
import { ContextWhole } from './context'

export default function PlaceOrder() {
    const { dataState, thisAppName, currency, converter, setCurrency } = React.useContext(ContextWhole)
 
        
    const basketElements = (
        dataState.filter(item => item.quantity > 0).map(item => (
            <BasketItem
                key={item.id}
                item={item}
            />
        ))
    )
    const eachTotal = (
        dataState.map(item => (
            item.price * item.quantity
        ))
    )

    const sumTotal = (
        (eachTotal.reduce((a, b) => (a + b))* currency.value).toLocaleString("en-UK", { style: "currency", currency: `${currency.name}` })
    )

    return (
        <div >
            <Header
                thisAppLogoText="Foodie"
                thisAppName="Menu"
                navigateToEndpoint="/portfolio/menu"
                appBtn1Name="£"
                appBtn1Function={() => setCurrency(converter.GBP)}
                appBtn2Name="$"
                appBtn2Function={() => setCurrency(converter.USD)}
                appBtn3Name="€"
                appBtn3Function={() => setCurrency(converter.EUR)}
            />

            <div className='PlaceOrder-basketElContainer'>
                {basketElements}
                {
                    basketElements.length > 0 ?
                        <p className='PlaceOrder-total'>Total: {sumTotal}</p> : ""}
            </div>


            {
                basketElements.length > 0 ?
                    <Link to="/menu/place-order">
                        <button
                            className='Menu-reviewOrderBtn'
                            disabled={true} >Complete Order</button>
                    </Link> :
                    <p className='PlaceOrder-msg'>There's nothing here!</p>

            }

            <Footer
                thisAppName={thisAppName}
                thisAppVideoUrl="#"
                thisAppGitrepository="#"
            />
        </div>
    );
}