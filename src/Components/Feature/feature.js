import React from 'react'
import { Button } from 'reactstrap'
import "../../Styles/feature.css"

const Feature = () => {
    return (
        <div className="featureContainer">
            <h1>Featured Events</h1>
            <p> This month is Cupcake Palooza! Check out the Events page for upcoming events</p>
            <Button className= "featureButton">See Events</Button>            
        </div>
    )
}

export default Feature
