import React, { useState } from 'react'
import { Row, Col, Form, ListGroup } from 'react-bootstrap'

import './Widget.style.scss'
import PropTypes from 'prop-types'

function TodoBodyWidget() {

  return (
    <div className='todo'>
      <p className='todo__header'>What needs to be done?</p>
      <Row>
        <Col>2 items left</Col>
        <Col>
          <span className="todo__btn">All</span>
          <span className="todo__btn">Active</span>
          <span className="todo__btn">Completed</span>
        </Col>
        <Col>Clear Completed</Col>
      </Row>
      <ListGroup variant="flush" className='todo__list'>
        <ListGroup.Item className='todo__item'><input type="checkbox" className='todo__chk-item' id='1' /><label for='1'>Dapibus ac facilisis in</label></ListGroup.Item>
        <ListGroup.Item className='todo__item'><input type="checkbox" className='todo__chk-item' id='2' /><label for='2'>Dapibus ac facilisis in</label></ListGroup.Item>
        <ListGroup.Item className='todo__item'><input type="checkbox" className='todo__chk-item' id='3' /><label for='3'>Dapibus ac facilisis in</label></ListGroup.Item>
        <ListGroup.Item className='todo__item'><input type="checkbox" className='todo__chk-item' id='4' /><label for='4'>Dapibus ac facilisis in</label></ListGroup.Item>
      </ListGroup>
    </div>
  )
}


TodoBodyWidget.propTypes = {

}

export default TodoBodyWidget

