import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Hero from "./Components/Header&Hero/hero"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
    );
  }
}

export default App
