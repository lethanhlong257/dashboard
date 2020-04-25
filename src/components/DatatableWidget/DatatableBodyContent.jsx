import React, { useState } from 'react'
import { Row, Pagination, Table } from 'react-bootstrap'

import './DatatableBodyContent.style.scss'
import PropTypes from 'prop-types'
function DatatableBodyContent({ contact }) {
  let contactLength = contact.length
  let contactPerPage = 5
  let numOfPage = Math.ceil(contactLength / contactPerPage)
  
  const [currentIndex, setCurrentIndex] = useState(1)
  let startIndex = 1
  let endIndex = contactPerPage
  const [currentContactPerPage, setCurrentContactPerpage] = useState(paging(startIndex, endIndex, contact))
  const handlePaging = (selectedIndex) => {
    startIndex = (contactPerPage * selectedIndex - (contactPerPage-1))
    endIndex = startIndex + (contactPerPage-1)
    setCurrentIndex(selectedIndex)
    setCurrentContactPerpage(paging(startIndex, endIndex, contact))
  }
  let paginationItems = [];
  for (let i = 1; i <= numOfPage; i++) {
    paginationItems.push(
      <Pagination.Item 
        className={currentIndex === i ? 'active' : null}
        onClick={() => { handlePaging(i) }} key={i}>{i}
      </Pagination.Item>
      )
  }
  return (
    <div className='datatable-body-content'>
      <Row>
        <div className='mr'><span>{currentIndex} to {currentIndex+contactPerPage-1} of {contactLength} contacts</span></div>
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
            {
              currentContactPerPage.map((c, i) => (
                <tr key={i}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.title}</td>
                </tr>
              ))
            }


          </tbody>
        </Table>
      </Row>
    </div>
  )
}

function paging(start, end, data) {
  let temp = []
  for (let i = start - 1; i < end; i++) {
    const c = data[i];
    if (c) temp.push(c)
  }
  return temp
}

DatatableBodyContent.propTypes = {
  contact: PropTypes.array.isRequired
}

export default DatatableBodyContent

