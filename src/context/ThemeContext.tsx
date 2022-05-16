import React from 'react'

interface ThemeInterface {
  themeValue: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

//create context
const ThemeContext = React.createContext({} as ThemeInterface)

export default ThemeContext
