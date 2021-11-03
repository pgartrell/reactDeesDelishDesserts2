import React, { Component } from "react";
import {Button, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from "reactstrap";
import "../../Styles/hero.css"
import { NavLink } from 'react-router-dom';
import Nav from 'reactstrap';


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
            <div>
            <div className="col">
                <h3 className="logoTitle">Dees Delish Desserts</h3>            
            </div> 
            {/* <div className ="col">
                <NavbarComponent toggle={toggle} />
            </div> */}
            </div>
            <div className= "heroContent">           
                <div className="heroItems">
                    <h1>Dees Delish Desserts</h1>
                        <p>For Complete Sweet Relief Come See Dee</p>
                            <Button color="warning" size="lg">
                            <i className="fa fa-sign-in fa-lg" />Make an Order
                            </Button>
                </div>                
            </div>
        </div>

        <Navbar dark sticky="top" expand="md">
            <div className="container">
                <NavbarBrand className="mr-auto" href="/"><h1>Dees Delish Desserts</h1></NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    {/* <Nav navbar> */}
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <i className="fa fa-home fa-lg" /> About                                            
                            </NavLink>                                        
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/gallery">
                                <i className="fa fa-list fa-lg" /> Gallery                                           
                            </NavLink>                                        
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                <i className="fa fa-info fa-lg" /> Contact                                          
                            </NavLink>                                        
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/events">
                                <i className="fa fa-address-card fa-lg" /> Events                                            
                            </NavLink>                                        
                        </NavItem>
                    {/* </Nav> */}
                </Collapse>
            </div>
        </Navbar>
    </React.Fragment>
    );    
  }
}

export default Hero;