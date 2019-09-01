import React, { Component } from 'react';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';

import "./DashboardBar.style.scss"

export default class DashboardBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" className="dashboard-bar">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto dashboard-bar__brand">
            <i className="fas fa-columns"></i>
            {' Dashboard'}
          </Navbar.Brand>
          <i className="far fa-user dashboard-bar__icon"></i>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="dashboard-bar__text">
            <NavDropdown.Item href="#action/3.1" className="dashboard-bar--black-text">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dashboard-bar--black-text">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"className="dashboard-bar--black-text">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="dashboard-bar--black-text">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Container>

      </Navbar>
    )
  }
}
