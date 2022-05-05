import React, { useContext, useState } from 'react'

import SwithchTheme from '../ThemeSwitcher/SwitchTheme'
import ShoppinCart from '../ShoppingCart/ShoopingCart'
import ThemeContext from '../../context/ThemeContext'

import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

import './headerComponent.scss'

const HearderComponent = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { theme } = useContext(ThemeContext)

  // console.log(navbarOpen)
  // console.log(cartOpen)

  const handleToggleMenubar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const shoppingCartToogle = () => {
    setCartOpen(!cartOpen)
  }

  return (
    <div className="headerBar" style={{ background: theme }}>
      <section className="headerBar__front">
        <span className="headerBar__MenuBar" onClick={handleToggleMenubar}>
          {navbarOpen ? (
            <MdClose aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </span>
        <span>{navbarOpen && <SwithchTheme />}</span>

        <span className="headerBar__text">Countries</span>
        <input
          className="headerBar__searchBar"
          type="text"
          placeholder="Search ...."
          name="search"
        ></input>
      </section>

      <section className="headerBar__ShoppingCart" onClick={shoppingCartToogle}>
        {cartOpen ? (
          <ShoppinCart />
        ) : (
          <Badge badgeContent={1} color="secondary">
            <ShoppingCartIcon aria-hidden="true" />
          </Badge>
        )}
      </section>
    </div>
  )
}

export default HearderComponent
