import React, { Component } from "react";
import {Button} from "reactstrap";
import "../../Styles/hero.css"
import NavBar from "./navBar";
import { Link } from 'react-router-dom'




class Hero extends Component {
        constructor(props){
            super(props);

            this.state={
                isNavOpen: false
            }
            
            this.toggleNav = this.toggleNav.bind(this)
        }

        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            })
        }
  

render() {
    return (
    <React.Fragment>
        <div className= "heroContainer">      
            <div className= "heroContent">           
                <div className="heroItems">
                    <NavBar />
                        <h1 className="aboutTitle">Dees Delish Desserts</h1>
                        <p>For Complete Sweet Relief Come See Dee</p>
                        <Link to="/contact"><Button color="warning" size="lg"><i className="makeOrderButton fa fa-sign-in fa-lg" />Make an Order</Button></Link>
                </div>                
            </div>
        </div>

    </React.Fragment>
        
    );    
  }
}

export default Hero;