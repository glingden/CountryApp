import React from 'react'

type ThemeType = {
  themeValue: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

//create context
export const ThemeContext = React.createContext({} as ThemeType)

// export default ThemeContext

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeValue, setTheme] = React.useState('purple')
  return (
    <ThemeContext.Provider value={{ themeValue, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
