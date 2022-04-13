import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../ReusableComponents/Header'
import Footer from '../ReusableComponents/Footer'
import MenuItem from './MenuItem'
import { ContextWhole } from './context'
import { getClass } from './utils/imgClass'
import './menu.css'

export default function Menu() {
  const { dataState, thisAppName, currency, converter, setCurrency } = React.useContext(ContextWhole)

  const menuItems = dataState.map((item, i) => (
    <MenuItem
      key={item.id}
      item={item}
      className={getClass(i)}
    />
  ))

  return (
    <div className='Menu-hero'>

      <Header
        thisAppLogoText="Foodie"
        thisAppName={thisAppName}
        navigateToEndpoint="./"
        appBtn1Name="£"
        appBtn1Function={() => setCurrency(converter.GBP)}
        appBtn2Name="$"
        appBtn2Function={() => setCurrency(converter.USD)}
        appBtn3Name="€"
        appBtn3Function={() => setCurrency(converter.EUR)}
      />

      <main className='Menu-gridContainer'>
        {menuItems}
      </main>

      <Link to="/menu/place-order"><button className='Menu-reviewOrderBtn'>Review Order</button></Link>

      <Footer
        thisAppName={thisAppName}
        thisAppVideoUrl="#"
        thisAppGitrepository="#"
      />

    </div>
  );
}