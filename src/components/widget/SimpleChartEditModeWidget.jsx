import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'



function SimpleChartEditModeWidget({ data }) {

  return (
    <div className='simple-chart-edit-mode'>
      <ButtonGroup aria-label="Basic example" className='simple-chart-edit-mode__btn-group justify-content-center'>
        <Button className='simple-chart-edit-mode__btn' variant="primary"><i className="fas fa-chart-pie"></i></Button>
        <Button className='simple-chart-edit-mode__btn' variant="primary"><i className="fas fa-chart-bar"></i></Button>
        <Button className='simple-chart-edit-mode__btn' variant="primary"><i className="fas fa-chart-line"></i></Button>
      </ButtonGroup>
    </div>
  )
}

SimpleChartEditModeWidget.propTypes = {
  data: PropTypes.array.isRequired
}

export default SimpleChartEditModeWidget

