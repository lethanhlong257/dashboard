import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { headerDashBoardConstant } from '../../constants/globalConstant.js'

import './ExpandingWidgetModal.style.scss'
function ExpandingWidgetModal(props) {
  const dispatch = useDispatch()
  const isExpanding = useSelector(state => state.cardHeaderCustomReducer.isExpanding);
  const cancelExpandingWidgetModal = () => {
    dispatch({ type:  headerDashBoardConstant.CLOSE_EXPAND_WIDGET});
  }
  return (
    <Modal
      show={isExpanding}
      onHide={() => cancelExpandingWidgetModal()}
      dialogClassName="modal-90w"
      aria-labelledby="expanding-widget-modal"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  )
}


export default ExpandingWidgetModal
