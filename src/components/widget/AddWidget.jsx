import React from 'react'

import './Widget.style.scss'
function AddWidget(props) {
  return (
    <div className='add-widget'>
      <span className='add-widget__btn'>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  )
}

AddWidget.propTypes = {

}

export default AddWidget

