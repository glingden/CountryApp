import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

import '../styles/themeSwitch.scss'

const SwithchTheme = () => {
  const { setTheme } = useContext(ThemeContext)

  return (
    <div className="themeSection">
      <p>SELECT ONE </p>
      <hr />
      <section
        className="themeSection__colorSelection"
        onClick={() => setTheme('purple')}
      >
        <button className="themeSection__purple">P</button>
        <p>Purple</p>
      </section>
      <section
        className="themeSection__colorSelection"
        onClick={() => setTheme('#0277EE')}
      >
        <button className="themeSection__blue">B</button>
        <p>Blue</p>
      </section>
      <section
        className="themeSection__colorSelection"
        onClick={() => setTheme('#26A65B')}
      >
        <button className="themeSection__green">G</button>
        <p>Green</p>
      </section>
      <section
        className="themeSection__colorSelection"
        onClick={() => setTheme('#eb4034')}
      >
        <button className="themeSection__red">R</button>
        <p>Red</p>
      </section>
    </div>
  )
}

export default SwithchTheme
