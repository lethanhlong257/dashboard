import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Form, Col, Card, Alert } from 'react-bootstrap'
import './Widget.style.scss'
import { CONSTANT } from '../../constants/globalConstant.js'
import { useSelector, useDispatch } from 'react-redux'
import {removeElementInArray, addElementInArray} from '../../helpers/helpers'

function DataEditModeWidget({ data }) {
  const usingContactProperty = useSelector(state => state.widget.usingContactProperty);
  const remainningContactProperty = useSelector(state => state.widget.remainningContactProperty);
  const dispatch = useDispatch()
  const [usingContactPropertyState, setUsingContactPropertyState] = useState(usingContactProperty)
  const [remainningContactPropertyState, setRemainningContactPropertyState] = useState(remainningContactProperty)
  const addContactProperty = (contactProperty) => {
    let remainningContactProperty2 = removeElementInArray(contactProperty, remainningContactProperty) 
    let usingContactProperty2 = addElementInArray(contactProperty, usingContactProperty)
    setUsingContactPropertyState(usingContactProperty2)
    setRemainningContactPropertyState(remainningContactProperty)
    dispatch({type: CONSTANT.ADD_CONTACT_PROPERTY, payload: {remainningContactProperty2, usingContactProperty2}})
  }
  console.log(usingContactPropertyState)
  return (
    <div className='data-edit-mode'>
      <Form.Group controlId="formData">
        <Form.Label>Data Source</Form.Label>
        <Form.Control as="select">
          <option>Contact</option>
        </Form.Control>
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col} controlId="formCol">
          <Form.Label>Column:</Form.Label>
          <Card>
            {
              remainningContactPropertyState.map(contactProperty => (
                <Alert onClick={()=>addContactProperty(contactProperty)} key={contactProperty} variant='dark' className='data-edit-mode__alert'>
                  <span className='float-left'>{contactProperty}</span><span className='float-right'>+</span>
                </Alert>
              ))
            }
          </Card>
        </Form.Group>

        <Form.Group as={Col} controlId="formSelectedColumn">
          <Form.Label>Selected Column:</Form.Label>
          <Card>
            {
              usingContactPropertyState.map(contactProperty => (
                <Alert key={contactProperty} variant='dark' className='data-edit-mode__alert'>
                  <span className='float-left'>{contactProperty}</span><span className='float-right'>-</span>
                </Alert>
              ))
            }
          </Card>
        </Form.Group>
      </Form.Row>
    </div>
  )
}

DataEditModeWidget.propTypes = {
  data: PropTypes.array.isRequired,
  remainningContactProperty: PropTypes.array,
  usingContactProperty: PropTypes.array
}

export default DataEditModeWidget

