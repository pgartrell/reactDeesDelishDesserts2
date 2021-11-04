import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Hero from "./Components/Header&Hero/hero"
import PopularProducts from './Components/PopularProducts/popularProducts';
import {productData} from "./Data/data"
import Footer from "./Components/Footer/footer"
import Feature from './Components/Feature/feature';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Hero />
          <PopularProducts data={productData} />
          <Feature />
          <Footer />
          
        </BrowserRouter>
    );
  }
}

export default App
