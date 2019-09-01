import React from "react"
import { Route, Switch } from "react-router-dom"

import Dashboard from 'views/Dashboard/Dashboard'

export default class AppRoute extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    )
  }
}

