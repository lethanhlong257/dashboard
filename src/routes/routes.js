import React from "react"
import { Route, Switch } from "react-router-dom"

import Dashboard from 'views/Dashboard/Dashboard'
import TextWidget from 'components/TextWidget/TextWidget'

export default class AppRoute extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/test" component={TextWidget} />
        <Route path="/" component={Dashboard} />
      </Switch>
    )
  }
}

