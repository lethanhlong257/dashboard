import React, { Component } from "react"
import { connect } from "react-redux"
import DashboardBar from 'components/dashboardBar/DashboardBar.component'
import Title from 'components/title/Title.jsx'
import { Container } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DragableContainer from '../../components/dragableContainer/DragableContainer'
import ExpandingWidgetModal from '../../components/ExpandingWidgetModal/ExpandingWidgetModal'
import TextWidget from '../../components/TextWidget/TextWidget'
import {CONSTANT} from '../../constants/globalConstant'

class Dashboard extends Component {
  render() {
    let Widget;

    switch (this.props.widgetType) {
      case CONSTANT.WIDGET_TYPE_TEXT:
        Widget = <TextWidget />
        break;
      default:
        Widget = <TextWidget />
        break;
    }

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

        <ExpandingWidgetModal>
          {Widget}
        </ExpandingWidgetModal>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return ({
    widgetType: state.cardHeaderCustomReducer.widgetType
  })
}


export default connect(mapStateToProp)(Dashboard)
