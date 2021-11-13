import React, { Component } from "react";
import {
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
import NavBar from "../Header&Hero/navBar";
import Footer from "../Footer/footer";
import ImageGalleryCarousel from "./ImageGalleryCarousel";



class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      cards: GalleryPhotos,
      selectedCard: null,
      cardFilter: null,
      modal: false,
      carouselImages: CarouselImages,
=======
>>>>>>> af9742c41fbd9d738f2efba77e72f2fa1ba47e5b
      isNavOpen: true
    };
    this.toggleModal = this.toggleModal.bind(this)
    // this.noRefCheck=this.noRefCheck.bind(this)
  }

<<<<<<< HEAD
  

  cardSelect(cardId) {
    this.setState({ selectedCard: cardId, modal: true });
  }

  // noRefCheck() { 
  //   let prevState= this.state.modal
  //   this.setState({ modal: !prevState });
  // }
  // noRefCheck() { 
  //   this.setState({ modal: !this.state.isOpen });
  // }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal() {
    this.setState({modal: !this.state.modal})
=======
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
>>>>>>> af9742c41fbd9d738f2efba77e72f2fa1ba47e5b
  }

  render() {
    const currentCard = this.state.cards.filter(c => c.id === this.state.selectedCard);
    const firstImage = currentCard.length ? ({ "id": 'featured', "original": currentCard[0].img, "thumbnail": currentCard[0].img }) : null;
    const carouselImages = [...this.state.carouselImages];
    if (firstImage) {
        carouselImages.unshift(firstImage);
    }
    return (
      <div>
<<<<<<< HEAD
        <NavBar />
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
          <ModalHeader toggle={function noRefCheck() {}} >
            Dees Delish Desserts
          </ModalHeader>
          <ModalBody>
            <ImageGalleryCarousel images={this.state.carouselImages} img_ix={this.state.selectedCard} />
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
        <Footer />
=======
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
>>>>>>> af9742c41fbd9d738f2efba77e72f2fa1ba47e5b
      </div>
    );
  }
}







export default MainMenu;
