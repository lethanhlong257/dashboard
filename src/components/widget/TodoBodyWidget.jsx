import React, { useState } from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'

import './Widget.style.scss'
import PropTypes from 'prop-types'

function TodoBodyWidget() {

  return (
    <div className='Todo'>
      <p className='Todo__header'>What needs to be done?</p>
      <Row>
        <Col>2 itms left</Col>
        <Col>
          <Button className='Todo__btn' size="sm" variant="outline-dark">Dark</Button>
          <Button className='Todo__btn' size="sm" variant="outline-dark">Dark</Button>
          <Button className='Todo__btn' size="sm" variant="outline-dark">Dark</Button>
        </Col>
        <Col>Clear Completed</Col>
      </Row>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  )
}


TodoBodyWidget.propTypes = {

}

export default TodoBodyWidget

