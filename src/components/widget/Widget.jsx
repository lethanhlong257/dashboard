import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import CardHeaderCustom from '../CardHeaderCustom/CardHeaderCustom'
import { HeaderWidgetIcon } from '../../data/headerWidget'
import { CONSTANT } from '../../constants/globalConstant'
import DatatableBodyContent from '../DatatableWidget/DatatableBodyContent'
import TextWidgetEditMode from '../TextWidget/TextWidgetEditMode'
import WidgetEditMode from './WidgetEditMode'
import TodoBodyWidget from './TodoBodyWidget'
import SimpleChartWidget from './SimpleChartWidget'
import AddWidget from './AddWidget'

function Widget({ widgetTitle, widgetType, data }) {
  const isEditMode = useSelector(state => state.dashboardBarReducer.isEditMode);
  let widget
  switch (widgetType) {
    case CONSTANT.WIDGET_TYPE_DATATABLE:
      widget = isEditMode ?
        <WidgetEditMode data={data} type={CONSTANT.WIDGET_TYPE_DATATABLE} /> :
        <DatatableBodyContent contact={data} />
      break;
    case CONSTANT.WIDGET_TYPE_TEXT:
      widget =
        isEditMode ?
          <TextWidgetEditMode content={data} /> :
          <Card.Text>{data}</Card.Text>
      break;
    case CONSTANT.WIDGET_TODO_LIST:
      widget =
        isEditMode ?
          <TodoBodyWidget /> :
          <TodoBodyWidget />
      break;
    case CONSTANT.WIDGET_SIMPLE_CHART:
      widget =
        isEditMode ?
          <SimpleChartWidget data={data} /> :
          <SimpleChartWidget data={data} />
      break;
    case CONSTANT.WIDGET_ADD:
      widget =
        isEditMode ?
          <AddWidget /> :
          <AddWidget />
      break;
    default:
      widget =
        isEditMode ?
          <AddWidget /> :
          <AddWidget />
      break;
  }
  return (
    <Card className='widget'>
      <CardHeaderCustom
        title={widgetTitle}
        isEditMode={isEditMode}
        headerCardIcons={HeaderWidgetIcon}
        widgetType={widgetType}
      />
      <Card.Body className='widget-body'>
        {widget}
      </Card.Body>
    </Card>
  )
}

Widget.propTypes = {
  isEditMode: PropTypes.bool,
  widgetTitle: PropTypes.string.isRequired
}

export default Widget

