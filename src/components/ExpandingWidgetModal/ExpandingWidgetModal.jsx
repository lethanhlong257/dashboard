import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'

function ExpandingWidgetModal(props) {
  const [show, setShow] = useState(true);
  const isExpanding = useSelector(state => state);
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="expanding-widget-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="expanding-widget-modal">
          Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </Modal>
  )
}


export default ExpandingWidgetModal
