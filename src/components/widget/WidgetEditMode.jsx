import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import DataEditModeWidget from './DataEditModeWidget'
import { CONSTANT } from '../../constants/globalConstant'
import SimpleChartEditModeWidget from './SimpleChartEditModeWidget'

function WidgetEditMode({ data, type }) {
  return (
    <div className="text-widget-edit-mode">
      <Form>
        <Form.Group controlId="formWidgetTitle">
          <Form.Label>Widget Tile</Form.Label>
          <Form.Control type="type" placeholder="Widget Tile" />
        </Form.Group>

        <Form.Group controlId="formWidgetType">
          <Form.Label>Widget Type</Form.Label>
          <Form.Control as="select">
            <option>Text</option>
            <option>Data</option>
          </Form.Control>
        </Form.Group>

        <hr className="bar" />
        {type === CONSTANT.WIDGET_TYPE_DATATABLE ? <DataEditModeWidget data={data} /> : null}
        {type === CONSTANT.WIDGET_SIMPLE_CHART ? <SimpleChartEditModeWidget data={data} /> : null}


      </Form>
    </div>
  )
}

WidgetEditMode.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
}


export default WidgetEditMode

