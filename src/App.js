import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ThemeContext from './context/Context'
import SingleCountry from './pages/singleCountry'
import HomePage from './pages/Home'
import PageNotFound from './pages/pageNotFound'
// import { useSelector, useDispatch } from 'react-redux'
// import store from './store'

import './styles/App.css'

function App() {
  // const { data, loading, error } = useSelector((state) => state.country)
  const [themeValue, setTheme] = useState('purple')

  // console.log('Initial state:', store().getState().country)
  // console.log('State after action:', data)

  return (
    <div className="App">
      {/* <button onClick={() => dispatch(getTodos())}> GET TODO </button> 
      {loading && <p> loading .... </p>}
      {error && <p> {error}</p>} */}

      <ThemeContext.Provider value={{ themeValue, setTheme }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/:countryName" element={<SingleCountry />} />
            <Route eaxct path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
