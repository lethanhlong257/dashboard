import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Title.style.scss'
export class Title extends Component {
  static propTypes = {
    titleContent: PropTypes.string,
    isEditMode: PropTypes.bool.isRequired
  }

  render() {
    let isEditMode = this.props.isEditMode;
    return (
      <div className="title">
        <span className="title__content mr-auto">
          {this.props.titleContent}
        </span>
        {
          isEditMode ? 
          <div className="title__icon-group">
            <i className="fas fa-square title__icon"></i>
            <i className="fas fa-pause title__icon"></i>
            <i className="fas fa-th title__icon"></i>
          </div> :
          null
        }
       
        <hr className="title__bar" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  titleContent: state.titleReducer.titleDashboard,
  isEditMode: state.dashboardBarReducer.isEditMode
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)
