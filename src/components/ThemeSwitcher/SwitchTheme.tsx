import React, { useContext, useState } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './switchTheme.scss'

const SwithchTheme = () => {
  const { setTheme } = useContext(ThemeContext)
  const themeTogglePurple = () => {
    setTheme('purple')
  }

  const themeToggleBlue = () => {
    setTheme('blue')
  }

  const themeToggleGreen = () => {
    setTheme('green')
  }

  const themeToggleRed = () => {
    setTheme('red')
  }

  return (
    <div className="themeSection">
      <p>SWITCH THEME </p>
      <hr />
      <section
        className="themeSection__colorSelection"
        onClick={themeTogglePurple}
      >
        <span className="themeSection__purple">P</span>
        <p>Purple</p>
      </section>
      <section
        className="themeSection__colorSelection"
        onClick={themeToggleBlue}
      >
        <span className="themeSection__blue">B</span>
        <p>Blue</p>
      </section>
      <section
        className="themeSection__colorSelection"
        onClick={themeToggleGreen}
      >
        <span className="themeSection__green">G</span>
        <p>Green</p>
      </section>
      <section
        className="themeSection__colorSelection"
        onClick={themeToggleRed}
      >
        <span className="themeSection__red">R</span>
        <p>Red</p>
      </section>
    </div>
  )
}

export default SwithchTheme
