import React, { Component } from 'react'
import ImageGalleryCarousel from '../Components/ImageGallery/ImageGalleryCarousel'
import MainMenu from '../Components/ImageGallery/MainMenu'
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
} from "reactstrap";
import Filter from "../Components/ImageGallery/Filter";
import CardInfo from "../Components/ImageGallery/CardInfo";
import { CarouselImages, GalleryPhotos } from "../Data/data";

// import ImageCarousel from '../Components/ImageGallery/ImageCarousel'
// import ImageGallery from '../Components/ImageGallery/ImageGallery'
// import ImageGalleryFormat from '../Components/ImageGallery/ImageGalleryFormat'

// const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//   ];
class GalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: GalleryPhotos,
            selectedCard: null,
            cardFilter: null,
            modal: false,
            carouselImages: CarouselImages
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    cardSelect(cardId) {
        this.setState({ selectedCard: cardId, modal: true });
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal });
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
                <MainMenu />
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

                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        <ImageGalleryCarousel images={carouselImages} />
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
                        <Button onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default GalleryPage
