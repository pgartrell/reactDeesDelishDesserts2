import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Hero from "./Components/Header&Hero/hero"
import PopularProducts from './Components/PopularProducts/popularProducts';
import {productData} from "./Data/data"
import Footer from "./Components/Footer/footer"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Hero />
          <PopularProducts data={productData} />
          <Footer />
        </BrowserRouter>
    );
  }
}

export default App
