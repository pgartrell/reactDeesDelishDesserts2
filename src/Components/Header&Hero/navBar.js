import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../Styles/navbar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar className="topnav" sticky="top" light expand="md">
        <NavbarBrand className="navbarBrand" href="/">
          Dees Delish Desserts
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} classname="ms-auto container-fluid"navbar>
          <Nav navbar className="ms-auto container-fluid">
            <NavItem className="ms-auto">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem classname="ms-auto">
              <NavLink className="nav-link" to="/gallery">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
