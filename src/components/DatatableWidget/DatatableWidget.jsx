import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import CardHeaderCustom from '../CardHeaderCustom/CardHeaderCustom'
import { HeaderWidgetIcon } from '../../data/headerWidget'
import { CONSTANT } from '../../constants/globalConstant'
import DatatableBodyContent from './DatatableBodyContent'
import contacts from '../../data/contacts.json'
import './DatatableBodyContent.style.scss'

function DatatableWidget() {
  const isEditMode = useSelector(state => state.dashboardBarReducer.isEditMode);
  return (
    <Card className='text-widget widget'>
      <CardHeaderCustom
        title="Text Widget"
        isEditMode={isEditMode}
        headerCardIcons={HeaderWidgetIcon}
        widgetType={CONSTANT.WIDGET_TYPE_DATATABLE}
      />
      <Card.Body className='widget-body'>
        {
          isEditMode ?
            <DatatableBodyContent contact={contacts} /> :
            <DatatableBodyContent contact={contacts} />
        }
      </Card.Body>
    </Card>
  )
}

DatatableWidget.propTypes = {
  isEditMode: PropTypes.bool.isRequired
}

export default DatatableWidget

