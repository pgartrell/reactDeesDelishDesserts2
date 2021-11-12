import React from "react";
import { Card, Button } from "react-bootstrap";
import NavBar from "../Header&Hero/navBar";
import whiteApple from "../../images/whiteApple.PNG";
import wineAndDine from "../../images/wineAndDine.PNG";
import yellowFlowerCake from "../../images/yellowFlowerCake.PNG";
import "../../Styles/events.css"
import Footer from "../Footer/footer";

const Events = () => {
  const eventCards = [
    { img: whiteApple, title: "White Apple", text: "White Apple" },
    { img: wineAndDine, title: "Wine and Dine", text: "Wine and Dine" },
    {img: yellowFlowerCake, title: "Yellow Flower Cake", text: "Yellow Flower Cake",
    },
  ];

  const renderCard = (card, index) => {
    return (
    
      <Card style={{ width: "25rem" }} key={index} className="renderCardWrapper">
        <Card.Img className="cardImage" variant="top" src="holder.js/100px180" src={card.img} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{card.title}</Card.Title>
          <Card.Text className="cardText">{card.text}</Card.Text>
          <Button variant="light" className="btn" >Check it Out</Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <React.Fragment className="eventsBackgroundImage">
       <NavBar /> 
        <div className="container">
            <Card className="featureCard">
                <Card.Header bg="dark"className="featureCardHeader">Featured Event</Card.Header>
                <Card.Body className="featureCardBody">
                <Card.Title className="featureCardTitle">Cupcake Palooza</Card.Title>
                <Card.Text className="featureCardText">
                    Check back here with more information about this event
                </Card.Text>
                <Button variant="light"className="featureBtn">Purchase Tickets</Button>
                </Card.Body>                
            </Card>
            <div className="eventsh1">
                <h1>Other Events</h1>
            </div>
        </div>
        <div className="grid">
            {eventCards.map(renderCard)}
        </div>
        <Footer />
    </React.Fragment>  
  );
};

export default Events;
