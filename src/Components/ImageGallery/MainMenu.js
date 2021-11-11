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
      cards: GalleryPhotos,
      selectedCard: null,
      cardFilter: null,
      modal: false,
      carouselImages: CarouselImages
    };
  }

  cardSelect(cardId) {
    this.setState({ selectedCard: cardId, modal: true });
  }

  noRefCheck() { 
    let prevState= this.state.modal
    this.setState({ modal: !prevState });
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
        <Filter
          cards={this.state.cards}
          cardSelect={(cardId) => this.cardSelect(cardId)}
          filter={this.state.cardFilter}
        />
        <CardInfo
          card={
            this.state.cards.filter(
              (card) => card.id === this.state.selectedCard
            )[0]
          }
        />
                    
        <Modal size="lg" isOpen={this.state.modal}  toggle={this.noRefCheck} onExit={() => this.setState({modal:true})}>
          <ModalHeader toggle={function noRefCheck() {}}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <ImageGalleryCarousel images={this.state.carouselImages} />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={function noRefCheck() {
                return true;
              }}
            >
              Add to Cart
            </Button>{" "}
            <Button onClick={function noRefCheck() {}}>Cancel</Button>
          </ModalFooter>
        </Modal> 
      </div>
    );
  }
}







export default MainMenu;
