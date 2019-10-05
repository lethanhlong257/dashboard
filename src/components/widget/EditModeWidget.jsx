import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import DataEditModeWidget from './DataEditModeWidget'

function EditModeWidget({ data }) {
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
        <DataEditModeWidget data={data} />
        
      </Form>
    </div>
  )
}

EditModeWidget.propTypes = {
  data: PropTypes.array.isRequired
}

export default EditModeWidget

