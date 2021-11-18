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
      cards: GalleryPhotos,
      selectedCard: null,
      cardFilter: null,
      modal: false,
      carouselImages: CarouselImages
    };
    this.toggleModal = this.toggleModal.bind(this)
    // this.noRefCheck=this.noRefCheck.bind(this)
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
        <Footer />
      </div>
    );
  }
}







export default MainMenu;
