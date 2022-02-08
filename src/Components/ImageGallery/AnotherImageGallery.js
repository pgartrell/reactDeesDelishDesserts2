import React, { useEffect, useState } from "react";

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

const AnotherImageGallery = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/desserts?populate=*")
      .then((response) => response.json())
      .then((data) => {
        
        setDesserts(data.data);
      })
      .catch((error) => alert("Sorry Could not fetch the desserts"));
  }, []);

  return (
    <Gallery>
      <h1 className="galleryh1">Dees Delish Dessert Gallery</h1>
      <Container id="gallery" fluid="md">
        <Row>
          {desserts.map((sDesserts) => {
            let imageurl = `http://localhost:1337${sDesserts.attributes.image.data.attributes.url}`
            return <Col key={sDesserts.attributes.id} className="responsive" lg={4}>
              <Item
                original={imageurl}
                thumbnail={imageurl}
                width="1600"
                height="1600"
                title={sDesserts.attributes.price}
                id="galleryItem1"
              >
                {({ ref, open }) => (
                  <div className="galleryImg">
                    <img
                      ref={ref}
                      onClick={open}
                      src={imageurl}
                      width="600"
                      height="500"
                      alt={sDesserts.attributes.name}
                    />
                  </div>
                )}
              </Item>
            </Col>;
          })}
        </Row>
      </Container>
    </Gallery>
  );
};

export default AnotherImageGallery;
