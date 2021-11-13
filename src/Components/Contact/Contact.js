import React, { Component } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import NavBar from "../Header&Hero/navBar";
import Footer from "../Footer/footer";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      agree: false,
      contactType: "By Phone",
      description: "",
      date: new Date(),
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  validate(firstName, lastName, phoneNum, email, address, city, zip) {
    const errors = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      address: "",
      city: "",
      zip: "",
    };

    if (this.state.touched.firstName) {
      if (firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters.";
      } else if (firstName.length > 15) {
        errors.firstName = "First name must be 15 or less characters.";
      }
    }

    if (this.state.touched.lastName) {
      if (lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters.";
      } else if (lastName.length > 15) {
        errors.lastName = "Last name must be 15 or less characters.";
      }
    }

    const reg = /^\d+$/;
    if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
      errors.phoneNum = "The phone number should contain only numbers.";
    }

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    //Why is it saying the type is not valid below
    if (this.state.touched.address && !reg.test(address)) {
      errors.address = "Address Not Valid";
    }

    if (this.state.touched.city) {
      if (city.length < 2) {
        errors.city = "Please name the city";
      }
    }

    if (this.state.touched.zip && !reg.test(zip)) {
      errors.address = "Zip is not valid";
    }

    return errors;
  }
  //Why is it saying the type is not valid above

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleDateChange(date) {
    this.setState({
      date: date,
    });
  }

  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.phoneNum,
      this.state.email,
      this.state.address,
      this.state.city,
      this.state.zip
    );

    return (
      <div style={{ backgroundImage: `url(${require("../../images/background-texture-2.jpg")})` }}>
        <NavBar />
        <Form className="mainForm">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                invalid={errors.firstName}
                onBlur={this.handleBlur("firstName")}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                invalid={errors.lastName}
                onBlur={this.handleBlur("lastName")}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                invalid={errors.email}
                onBlur={this.handleBlur("email")}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label htmlFor="date">Date Needed By</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date Needed By: mm/dd/yyyy"
                value={this.state.date}
                onBlur={this.handleBlur("date")}
                onChange={this.handleDateChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={this.state.address}
              onBlur={this.handleBlur("address")}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control
                placeholder="Seattle"
                value={this.state.city}
                onBlur={this.handleBlur("city")}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label htmlFor="zip">Zip</Form.Label>
              <Form.Control
                value={this.state.zip}
                onBlur={this.handleBlur("zip")}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label htmlFor="select">Dessert Options</Form.Label>
              <Form.Select aria-label="Select your dessert">
                <option>Open this select menu</option>
                <option value="32Cake">32 Cake</option>
                <option value="bananaPudding">Banana Pudding</option>
                <option value="geodeCake">Geode Cake</option>
                <option value="glamPops">Glam Pops</option>
                <option value="goldenCheesecake">Golden Cheesecake</option>
                <option value="pinkAfroCake">Pink Afro Cake</option>
                <option value="strawberries">Strawberries</option>
                <option value="yellowFlowerCake">Yellow Flower Cake</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Not finding what you are looking for? Describe your dessert
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            submit
          </Button>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
