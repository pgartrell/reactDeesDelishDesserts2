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

const AnotherImageGallery = () => (
  <Gallery> 
  <div id="gallery">
    {/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "400px 400px 400px 400px",
        gridTemplateRows: "114px 114px",
        gridGap: 12,
      }}
    > */}
      <Item
        original={Cake32}
        thumbnail={Cake32}
        width="1600"
        height="1600"
        title="$18.00"
        id="galleryItem1"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={Cake32}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={cupCakes}
        thumbnail={cupCakes}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem2"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={cupCakes}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={pinkAfroCake}
        thumbnail={pinkAfroCake}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem3"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={pinkAfroCake}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={glamPops}
        thumbnail={glamPops}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem4"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                className="smallItemStyles"
                ref={ref}
                onClick={open}
                src={glamPops}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={brownieWithIceCream}
        thumbnail={brownieWithIceCream}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem5"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={brownieWithIceCream}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={geodeCake}
        thumbnail={geodeCake}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem6"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={geodeCake}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={lionKing}
        thumbnail={lionKing}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem7"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={lionKing}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={flowery}
        thumbnail={flowery}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem8"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
              <img
                ref={ref}
                onClick={open}
                src={flowery}
                width="600"
                height="500"
              />
            </div>
          </div>
        )}
      </Item>

      <Item
        original={strawberries}
        thumbnail={strawberries}
        width="1024"
        height="768"
        title="$18.00"
        id="galleryItem9"
      >
        {({ ref, open }) => (
          <div className="responsive">
            <div className="galleryImg">
          <img
            ref={ref}
            onClick={open}
            src={strawberries}
            width="600"
            height="500"
          />
             </div>
           </div>
        )}
      </Item>
    {/* </div> */}
    </div>
  </Gallery>
);

export default AnotherImageGallery;

