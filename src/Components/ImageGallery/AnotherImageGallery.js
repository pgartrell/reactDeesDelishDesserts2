import React from "react";
import "../../../node_modules/photoswipe/dist/photoswipe.css";
import "../../../node_modules/photoswipe/dist/default-skin/default-skin.css";
import "../../Styles/AnotherImageGallery.css";
import Cake32 from "../../images/32Cake.PNG";
import cupCakes from "../../images/cupcakes.PNG";
import pinkAfroCake from "../../images/pinkAfroCake.PNG";
import glamPops from "../../images/glamPops.PNG";
import brownieWithIceCream from "../../images/brownieWIcecream.jpg";
import geodeCake from "../../images/GeodeCake.PNG";
import lionKing from "../../images/lionKingCake.PNG";
import flowery from "../../images/orangeFlowerCake.PNG";
import strawberries from "../../images/strawberries.PNG";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container, Row } from "react-bootstrap";

const AnotherImageGallery = () => (
  <Gallery>
    <h1 className="galleryh1">Dees Delish Dessert Gallery</h1>
    <Container id="gallery" fluid="md">
      <Row>
        <Col className="responsive" lg={4}>
          <Item
            original={Cake32}
            thumbnail={Cake32}
            width="1600"
            height="1600"
            title="$18.00"
            id="galleryItem1"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={Cake32}
                  width="600"
                  height="500"
                  alt="Celebration 32"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>

        <Col className="responsive" lg={4}>
          <Item
            original={cupCakes}
            thumbnail={cupCakes}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem2"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={cupCakes}
                  width="600"
                  height="500"
                  alt="decorate your cupcakes"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>

        <Col className="responsive" lg={4}>
          <Item
            original={pinkAfroCake}
            thumbnail={pinkAfroCake}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem3"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={pinkAfroCake}
                  width="600"
                  height="500"
                  alt="give her an afro"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>
      </Row>

      <Row>
        <Col className="responsive" lg={4}>
          <Item
            original={glamPops}
            thumbnail={glamPops}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem4"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  className="smallItemStyles"
                  ref={ref}
                  onClick={open}
                  src={glamPops}
                  width="600"
                  height="500"
                  alt="cake pops to glam pops"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>

        <Col className="responsive" lg={4}>
          <Item
            original={brownieWithIceCream}
            thumbnail={brownieWithIceCream}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem5"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={brownieWithIceCream}
                  width="600"
                  height="500"
                  alt="decadent brownie"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>

        <Col className="responsive" lg={4}>
          <Item
            original={geodeCake}
            thumbnail={geodeCake}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem6"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={geodeCake}
                  width="600"
                  height="500"
                  alt="sparkly cake"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>
      </Row>

      <Row>
        <Col className="responsive" lg={4}>
          <Item
            original={lionKing}
            thumbnail={lionKing}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem7"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={lionKing}
                  width="600"
                  height="500"
                  alt="lion king"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>

        <Col className="responsive" lg={4}>
          <Item
            original={flowery}
            thumbnail={flowery}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem8"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={flowery}
                  width="600"
                  height="500"
                  alt="flower on cake"
                />
              </div>
              // </div>
            )}
          </Item>
        </Col>

        <Col className="responsive" lg={4}>
          <Item
            original={strawberries}
            thumbnail={strawberries}
            width="1024"
            height="768"
            title="$18.00"
            id="galleryItem9"
          >
            {({ ref, open }) => (
              // <div className="responsive">
              <div className="galleryImg">
                <img
                  ref={ref}
                  onClick={open}
                  src={strawberries}
                  width="600"
                  height="500"
                  alt="decorate strawberries"
                />
              </div>
              //  </div>
            )}
          </Item>
        </Col>
      </Row>
    </Container>
  </Gallery>
);

export default AnotherImageGallery;
