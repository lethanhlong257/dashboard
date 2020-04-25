import React, { Component } from "react"
import { connect } from "react-redux"
import DashboardBar from 'components/dashboardBar/DashboardBar.component'
import Title from 'components/title/Title.jsx'
import { Container } from 'react-bootstrap'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DragableContainer from '../../components/dragableContainer/DragableContainer'
import ExpandingWidgetModal from '../../components/ExpandingWidgetModal/ExpandingWidgetModal'
import {CONSTANT} from '../../constants/globalConstant'
import PropType from 'prop-types'
import Widget from "../../components/widget/Widget"
import contacts from '../../data/contacts.json'
import textContent from '../../data/textContent'

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
          {widgetType === CONSTANT.WIDGET_TYPE_TEXT ? <Widget content={textContent.content} widgetTitle='Text Widget' widgetType={CONSTANT.WIDGET_TYPE_TEXT} /> : null}
          {widgetType === CONSTANT.WIDGET_TODO_LIST ? <Widget widgetTitle='Todo List Widget' widgetType={CONSTANT.WIDGET_TODO_LIST} /> : null}
          {widgetType === CONSTANT.WIDGET_TYPE_DATATABLE ? <Widget data={contacts} type={CONSTANT.WIDGET_TYPE_DATATABLE} widgetTitle='Datatable Widget' widgetType={CONSTANT.WIDGET_TYPE_DATATABLE} /> : null}
          {widgetType === CONSTANT.WIDGET_SIMPLE_CHART ? <Widget data={contacts} widgetTitle='Simple Chart Widget' widgetType={CONSTANT.WIDGET_SIMPLE_CHART} /> : null}
          
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
