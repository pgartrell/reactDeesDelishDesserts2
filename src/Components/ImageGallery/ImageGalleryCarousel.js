import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class ImageGalleryCarousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ImageGallery items={this.props.images} />;
  }
}

export default ImageGalleryCarousel;
