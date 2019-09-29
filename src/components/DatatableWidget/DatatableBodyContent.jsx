import React from 'react'
import { Row, Pagination, Table } from 'react-bootstrap'

import './DatatableBodyContent.style.scss'
import PropTypes from 'prop-types'
function DatatableBodyContent({contact}) {
  let contactLength = contact.length
  let contactPerPage = 5
  let numOfPage = Math.floor(contactLength/contactPerPage)

  let paginationItems =[];
  for (let i = 1; i <= numOfPage; i++) {
    paginationItems.push(<Pagination.Item key={i}>{i}</Pagination.Item>)
  }
  return (
    <div className='datatable-body-content'>
      <Row>
        <div className='mr'><span>1 to {contactPerPage} of {contactLength} contacts</span></div>
        <Pagination size='sm' className='widget-paging'>
          <Pagination.Prev />
            {paginationItems}
          <Pagination.Next />
        </Pagination>
      </Row>
      <Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>

          </tbody>
        </Table>
      </Row>
    </div>
  )
}

DatatableBodyContent.propTypes = {
  contact: PropTypes.array.isRequired
}

export default DatatableBodyContent

