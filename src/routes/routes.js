import React from "react"
import { Route, Switch } from "react-router-dom"

import Dashboard from 'views/Dashboard/Dashboard'
import CardHeaderCustom from 'components/CardHeaderCustom/CardHeaderCustom'

export default class AppRoute extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/test" component={CardHeaderCustom} />
        <Route path="/" component={Dashboard} />
      </Switch>
    )
  }
}

