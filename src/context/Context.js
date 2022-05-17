import React from 'react'

//Create Theme Context
export const ThemeContext = React.createContext({})

// ThemeContext Provider
const ThemeProvider = ({ children }) => {
  const [themeValue, setTheme] = React.useState('purple')

  return (
    <ThemeContext.Provider value={{ themeValue, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
