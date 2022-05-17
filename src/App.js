import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SingleCountry from './pages/singleCountry'
import HomePage from './pages/Home'
import PageNotFound from './pages/pageNotFound'

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:countryName" element={<SingleCountry />} />
          <Route eaxct path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
