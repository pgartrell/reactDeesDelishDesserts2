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
    { img: whiteApple, title: "White and Gold Tie", text: "White Apples will be present" },
    { img: wineAndDine, title: "Wine and Dine", text: "Bring your raised pinkies" },
    {img: yellowFlowerCake, title: "Yellow Flower Cake", text: "Learn how to make this cake",
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
                <Card.Header className="featureCardHeader">Featured Event</Card.Header>
                <Card.Body className="featureCardBody">
                <Card.Title className="featureCardTitle">Cupcake Palooza</Card.Title>
                <Card.Text className="featureCardText">
                    Bring your cupcake ideas and watch her make them! 
                </Card.Text>
                <Button variant="light"className="featureBtn">Purchase Tickets</Button>
                </Card.Body>                
            </Card>
            <div className="divEventsh1">
                <h1 className="eventsh1">Other Events</h1>
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
