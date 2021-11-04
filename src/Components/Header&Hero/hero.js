import React, { Component } from "react";
import {Button, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav} from "reactstrap";
import "../../Styles/hero.css"
import { NavLink } from 'react-router-dom';




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

                    <Navbar className="topnav" sticky="top" expand="md">
                        <NavbarBrand className="navbarBrand" href="/">Dees Delish Desserts</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/gallery">Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/contact">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/events">Events</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink  className="nav-link" to="/makeAnOrder">Make an Order</NavLink>
                                </NavItem>
                            </Nav>
                            </Collapse>
                    </Navbar>

                        <h1>Dees Delish Desserts</h1>
                        <p>For Complete Sweet Relief Come See Dee</p>
                        <Button color="warning" size="lg">
                        <i className="fa fa-sign-in fa-lg" />Make an Order
                        </Button>
                </div>                
            </div>
        </div>

    </React.Fragment>
        
    );    
  }
}

export default Hero;