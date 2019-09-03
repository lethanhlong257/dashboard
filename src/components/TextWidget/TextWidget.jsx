import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Card} from 'react-bootstrap'
import CardHeaderCustom from 'components/CardHeaderCustom/CardHeaderCustom'

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
       isEditMode: true,
       headerCardIcons: ['fas fa-cog', 'fas fa-expand-arrows-alt', 'far fa-trash-alt'],
       content:'With supporting text below as a natural lead-in to additional content.'
    }
  }

  render() {
    let isEditMode = this.state.isEditMode;
    let headerCardIcons = this.state.headerCardIcons;
    let content = this.state.content;
    return (
      <Card className='text-widget'>
        <CardHeaderCustom 
          title="Text Widget"
          isEditMode={isEditMode}
          headerCardIcons={headerCardIcons}
        />
        <Card.Body>
          {
            isEditMode ? 
            <textarea className="text-widget__textarea" defaultValue={content}></textarea> :
            <Card.Text>{content}</Card.Text>
          }
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TextWidget)
