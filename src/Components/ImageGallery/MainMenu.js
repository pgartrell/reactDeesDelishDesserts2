import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";
import Filter from "./Filter";
import CardInfo from "./CardInfo";
import { CarouselImages, GalleryPhotos } from "../../Data/data";
import "../../Styles/hero.css";
import { NavLink } from "react-router-dom";
import ImageGalleryCarousel from "./ImageGalleryCarousel";



class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <Navbar className="topnav" sticky="top" expand="md">
              <NavbarBrand className="navbarBrand" href="/">
                Dees Delish Desserts
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNav} />
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
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
                  <NavItem>
                    <NavLink className="nav-link" to="/makeAnOrder">
                      Make an Order
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </Navbar>
      </div>
    );
  }
}







export default MainMenu;
