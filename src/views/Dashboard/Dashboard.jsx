import React, { Component } from "react"
import { connect } from "react-redux"
import DashboardBar from 'components/dashboardBar/DashboardBar.component'
import Title from 'components/title/Title.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import TextWidget from 'components/TextWidget/TextWidget'


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <DashboardBar />
          <Container>
            <Title />
          </Container>
        </header>

        <Container>
          <Row>
            <Col><TextWidget /></Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default connect(
)(Dashboard)
