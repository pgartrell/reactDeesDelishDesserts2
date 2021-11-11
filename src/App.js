import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import About from "./Pages/About";
import GalleryPage from "./Pages/GalleryPage";
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'


class App extends Component {
  render() {
    return (
      <Router>    
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/gallery">
            <GalleryPage />
          </Route>

          <Redirect to='/about' />

        </Switch>
      </Router>
    );
  }
}

export default App;
