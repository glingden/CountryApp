import React from 'react'

interface ThemeInterface {
  theme: string
  setTheme: any
}

//create context
const ThemeContext = React.createContext({} as ThemeInterface)
export default ThemeContext
