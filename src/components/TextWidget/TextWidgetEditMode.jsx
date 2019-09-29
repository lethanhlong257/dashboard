import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import './TextWidget.style.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextWidgetEditMode({ content }) {
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

        <Form.Group controlId="formWidgetType">
          <Form.Label>Text Content</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

TextWidgetEditMode.propTypes = {
  content: PropTypes.string.isRequired
}

export default TextWidgetEditMode

