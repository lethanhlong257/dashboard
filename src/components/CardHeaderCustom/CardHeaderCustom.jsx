import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Navbar } from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {expandWidget} from './CardHeaderCustom.action'

import './CardHeaderCustom.style.scss'

class CardHeaderCustom extends Component {
  static propTypes = {
    title: PropTypes.string,
    isEditMode: PropTypes.bool,
    headerCardIcons: PropTypes.array,
    isExpanding: PropTypes.bool.isRequired,
    expandWidget: PropTypes.func.isRequired
  }

  expandWidget(widgetType){
    this.props.expandWidget(widgetType)
  }

  render() {

    const title = this.props.title;
    const isEditMode = this.props.isEditMode;
    const headerCardIcons = this.props.headerCardIcons;
    const widgetType = this.props.widgetType;
    return (
      <Card.Header className="boardcard__card-header">
        <Navbar.Brand className="mr-auto boardcard__brand">{title ? title : 'Title'}</Navbar.Brand>
        <div className="boardcard__icon-group">
          {
            !isEditMode ? 
            <i className="fas fa-expand-arrows-alt boardcard__icon" onClick={this.expandWidget.bind(this, widgetType)}></i> : 
            headerCardIcons.map((headerCardIcon, key) => (
              <i className={headerCardIcon + ' boardcard__icon'} key={key}></i>
            ))
          }
          
        </div>
      </Card.Header>
    )
  }
}


const mapStateToProps = (state) => ({
  isExpanding: state.cardHeaderCustomReducer.isExpanding
})

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    expandWidget
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHeaderCustom)