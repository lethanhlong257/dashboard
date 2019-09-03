import React, { Component } from 'react';
import { Navbar, NavDropdown, Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {handleEditMode} from './DashboardBar.action'

import "./DashboardBar.style.scss"

const DO_EDIT_MODE = true;
const DO_NOT_EDIT_MODE = false;

export class DashboardBar extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  handleEditMode(isEdit) {
    this.props.handleEditMode(isEdit)
  }

  render() {
    const name = this.props.name;
    return (
      <Navbar bg="dark" expand="lg" className="dashboard-bar">
        <Container>
          <Navbar.Brand href="/" className="mr-auto dashboard-bar__brand">
            <i className="fas fa-columns"></i>
            {' Dashboard'}
          </Navbar.Brand>
          <i className="far fa-user dashboard-bar__icon"></i>
          <NavDropdown title={name} id="basic-nav-dropdown" className="dashboard-bar__text">
            <NavDropdown.Item href="#edit-mode" onClick={this.handleEditMode.bind(this, DO_EDIT_MODE)} className="dashboard-bar--black-text">Edit Mode</NavDropdown.Item>
            <NavDropdown.Item href="#view-mode" onClick={this.handleEditMode.bind(this, DO_NOT_EDIT_MODE)} className="dashboard-bar--black-text">View Mode</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="dashboard-bar--black-text">Log out</NavDropdown.Item>
          </NavDropdown>
        </Container>

      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.dashboardBarReducer.name,
})

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    handleEditMode
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardBar)

