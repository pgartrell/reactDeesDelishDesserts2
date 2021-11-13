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
      carouselImages: CarouselImages,
      isNavOpen: true
    };
    this.toggleModal = this.toggleModal.bind(this)
    // this.noRefCheck=this.noRefCheck.bind(this)
  }

  

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
      </div>
    );
  }
}







export default MainMenu;
