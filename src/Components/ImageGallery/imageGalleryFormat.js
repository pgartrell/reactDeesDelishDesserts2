import React, { Component } from 'react'
import { render } from 'react-dom';
import "../../Styles/imageGallery.css"
import ImageGallery from './imageGallery';

class ImageGalleryFormat extends Component {
    constructor() {
        super();
        this.state = {
          images:[]
        };
      }

      
    //   componentDidMount(){
    //     axios.get(URL).then(res => this.setState({images:res.data.slice(0,20)}));
    //   }
    
      render() {
        const {images} = this.state;
        return (
          <div>
            <ImageGallery images={images} limit={12}/>
          </div>
        );
      }
    }

export default ImageGalleryFormat
