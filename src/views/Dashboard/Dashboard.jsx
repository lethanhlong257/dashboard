import React, { Component } from "react"
import { connect } from "react-redux"
import DashboardBar from 'components/dashboardBar/DashboardBar.component'
import Tilte from 'components/title/Tilte.jsx'
import { Container } from 'react-bootstrap'


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <DashboardBar />
          <Container>
            <Tilte />
          </Container>
        </header>
      </div>
    );
  }
}


export default connect(
)(Dashboard)
