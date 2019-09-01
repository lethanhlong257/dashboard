import React, { Component } from "react"
import { connect } from "react-redux"
import DashboardBar from 'components/dashboardBar/DashboardBar.component'


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
      <header className="header">
        <DashboardBar />
      </header>
    </div>
  );
  }
}


export default connect(
)(Dashboard)
