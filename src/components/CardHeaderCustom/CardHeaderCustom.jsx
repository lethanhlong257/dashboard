import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Navbar } from 'react-bootstrap'

import './CardHeaderCustom.style.scss'

export default class CardHeaderCustom extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <Card.Header className="boardcard__card-header">
        <Navbar.Brand className="mr-auto boardcard__brand">{this.props.title ? this.props.title : 'Title'}</Navbar.Brand>
        <div className="boardcard__icon-group"><i className="fas fa-expand-arrows-alt"></i></div>
      </Card.Header>
    )
  }
}

