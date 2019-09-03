import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Navbar } from 'react-bootstrap'

import './CardHeaderCustom.style.scss'

export default class CardHeaderCustom extends Component {
  static propTypes = {
    title: PropTypes.string,
    isEditMode: PropTypes.bool,
    headerCardIcons: PropTypes.array
  }

  render() {

    const title = this.props.title;
    const isEditMode = this.props.isEditMode;
    const headerCardIcons = this.props.headerCardIcons;
    return (
      <Card.Header className="boardcard__card-header">
        <Navbar.Brand className="mr-auto boardcard__brand">{title ? title : 'Title'}</Navbar.Brand>
        <div className="boardcard__icon-group">
          {
            !isEditMode ? 
            <i className="fas fa-expand-arrows-alt boardcard__icon"></i> : 
            headerCardIcons.map((headerCardIcon, key) => (
              <i className={headerCardIcon + ' boardcard__icon'} key={key}></i>
            ))
          }
          
        </div>
      </Card.Header>
    )
  }
}

