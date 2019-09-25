import React, { Component } from "react"
import { connect } from "react-redux"
import DashboardBar from 'components/dashboardBar/DashboardBar.component'
import Title from 'components/title/Title.jsx'
import { Container } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DragableContainer from '../../components/dragableContainer/DragableContainer'

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

        <div className="body">
          <Container>
            <DndProvider backend={HTML5Backend}>
              <DragableContainer/>
            </DndProvider>
          </Container>
        </div>
      </div>
    );
  }
}


export default connect(
)(Dashboard)
