import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Title.style.scss'
export class Tilte extends Component {
  static propTypes = {
    titleContent: PropTypes.string
  }

  render() {
    return (
      <div className="title">
        <h5 className="title__content">
          {this.props.titleContent}
        </h5>
        <hr className="title__bar" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  titleContent: state.titleReducer.titleDashboard
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Tilte)
