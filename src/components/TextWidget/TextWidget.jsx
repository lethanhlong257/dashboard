import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Card} from 'react-bootstrap'
import CardHeaderCustom from 'components/CardHeaderCustom/CardHeaderCustom'
import {CONSTANT} from '../../constants/globalConstant'
import TextWidgetEditMode from './TextWidgetEditMode'

import './TextWidget.style.scss'

export class TextWidget extends Component {
  static propTypes = {
    isEditMode: PropTypes.bool,
    headerCardIcons: PropTypes.array,
    content: PropTypes.string
  }

  constructor(props) {
    super(props)
  
    this.state = {
       headerCardIcons: ['fas fa-cog', 'fas fa-expand-arrows-alt', 'far fa-trash-alt'],
       content:'With supporting text below as a natural lead-in to additional content.'
    }
  }

  render() {
    let isEditMode = this.props.isEditMode;
    let headerCardIcons = this.state.headerCardIcons;
    let textContent = this.props.textContent;
    return (
      <Card className='text-widget widget'>
        <CardHeaderCustom 
          title="Text Widget"
          isEditMode={isEditMode}
          headerCardIcons={headerCardIcons}
          widgetType={CONSTANT.WIDGET_TYPE_TEXT}
        />
        <Card.Body className='widget-body'>
          {
            isEditMode ? 
            <TextWidgetEditMode content={this.state.content} /> :
            <Card.Text>{textContent}</Card.Text>
          }
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  isEditMode: state.dashboardBarReducer.isEditMode
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget)
