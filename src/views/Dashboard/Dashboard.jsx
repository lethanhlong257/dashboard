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
import PropType from 'prop-types'

class Dashboard extends Component {
  static propType = {
    widgetType: PropType.string.isRequired
  }
  render() {
    const widgetType = this.props.widgetType
    return (
      <div className="App">
        <header className="header">
          <DashboardBar />
          <Container fluid>
            <Title />
          </Container>
        </header>

        <div className="body">
          <Container fluid>
            <DndProvider backend={HTML5Backend}>
              <DragableContainer/>
            </DndProvider>
          </Container>
        </div>

        <ExpandingWidgetModal>
          {widgetType === CONSTANT.WIDGET_TYPE_TEXT ? <TextWidget widgetTitile='Widget Type' /> : null}
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
