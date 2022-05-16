import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import SinglePage from './pages/CountrySinglePage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:countryName" component={SinglePage} />
  </Switch>
)

export default Routes
