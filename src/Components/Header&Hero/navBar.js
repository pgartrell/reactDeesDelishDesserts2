import React, {Component} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Nav,
} from 'reactstrap'
import { NavLink } from "react-router-dom";
import "../../Styles/hero.css";
import "../../Styles/navbar.css"


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
      
        <div className="navbarDiv container">
          <Navbar className="topnav container" sticky="top" expand="md">
            <NavbarBrand className="navbarBrand" href="/">
              Dees Delish Desserts
            </NavbarBrand>
            <NavbarToggler className="navbarToggler" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto navbar">
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </NavItem >
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/events">Events</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/makeAnOrder">Make an Order</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      
    );
  }
}
