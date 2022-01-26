import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import About from "./Pages/About";
import GalleryPage from "./Pages/GalleryPage";
// import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import EventsPage from "./Pages/EventsPage";
import './Styles/globalStyles.css'
import background from "./images/background-texture.jpg"
import ContactPage from "./Pages/ContactPage";
import socialMediaBar from "./Components/SocialMediaBar/socialMediaBar"

class App extends Component {

  render() {
    return (
      <div styles={{backgroundImage: `url(${background})`}}>
        <socialMediaBar />
        <Router>    
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/gallery">
              <GalleryPage />
            </Route>

            
            <Route path="/events">
              <EventsPage />
            </Route>

            <Route path="/contact">
              <ContactPage />
            </Route>

            <Redirect to='/about' />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
