// import React, { Component } from "react";
// import { Button, Form, Col, Row } from "react-bootstrap";
// import NavBar from "../Header&Hero/navBar";
// import Footer from "../Footer/footer";
// import "../../Styles/contact.css"

// class Contact extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       phoneNum: "",
//       email: "",
//       address: "",
//       city: "",
//       zip: "",
//       agree: false,
//       contactType: "By Phone",
//       description: "",
//       date: new Date(),
//       touched: {
//         firstName: false,
//         lastName: false,
//         phoneNum: false,
//         email: false,
//       },
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDateChange = this.handleDateChange.bind(this);
//   }

//   validate(firstName, lastName, phoneNum, email, address, city, zip) {
//     const errors = {
//       firstName: "",
//       lastName: "",
//       phoneNum: "",
//       email: "",
//       address: "",
//       city: "",
//       zip: "",
//     };

//     if (this.state.touched.firstName) {
//       if (firstName.length < 2) {
//         errors.firstName = "First name must be at least 2 characters.";
//       } else if (firstName.length > 15) {
//         errors.firstName = "First name must be 15 or less characters.";
//       }
//     }

//     if (this.state.touched.lastName) {
//       if (lastName.length < 2) {
//         errors.lastName = "Last name must be at least 2 characters.";
//       } else if (lastName.length > 15) {
//         errors.lastName = "Last name must be 15 or less characters.";
//       }
//     }

//     const reg = /^\d+$/;
//     if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
//       errors.phoneNum = "The phone number should contain only numbers.";
//     }

//     if (this.state.touched.email && !email.includes("@")) {
//       errors.email = "Email should contain a @";
//     }

//     //Why is it saying the type is not valid below
//     if (this.state.touched.address && !reg.test(address)) {
//       errors.address = "Address Not Valid";
//     }

//     if (this.state.touched.city) {
//       if (city.length < 2) {
//         errors.city = "Please name the city";
//       }
//     }

//     if (this.state.touched.zip && !reg.test(zip)) {
//       errors.address = "Zip is not valid";
//     }

//     return errors;
//   }
//   //Why is it saying the type is not valid above

//   handleBlur = (field) => () => {
//     this.setState({
//       touched: { ...this.state.touched, [field]: true },
//     });
//   };

//   handleInputChange(event) {
//     const target = event.target;
//     const name = target.name;
//     const value = target.type === "checkbox" ? target.checked : target.value;

//     this.setState({
//       [name]: value,
//     });
//   }

//   //Trying to setup info sent to email
//   async handleSubmit(event) {
//     console.log("Current state is: " + JSON.stringify(this.state));
//     alert("Current state is: " + JSON.stringify(this.state));
//     event.preventDefault()
//     setStatus("Sending...")
//     const {firstName, lastName, phoneNum, email, address, city, zip} = event.target.elements
//     let details = {
//       firstName = firstName.value,
//       lastName = lastName.value,
//       phoneNum = phoneNum.value,
//       email = email.value,
//       address = address.value,
//       city = city.value,
//       zip = zip.value
//     }
//   }

//   handleDateChange(date) {
//     this.setState({
//       date: date,
//     });
//   }

//   handleEmailChange(event) {
//     this.setState({
//       email: email
//     })
//   }

//   render() {
//     const errors = this.validate(
//       this.state.firstName,
//       this.state.lastName,
//       this.state.phoneNum,
//       this.state.email,
//       this.state.address,
//       this.state.city,
//       this.state.zip
//     );

//Trying contact form with hooks and nodejs nodemailer
import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import NavBar from "../Header&Hero/navBar";
import Footer from "../Footer/footer";
import "../../Styles/contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("")
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    setLoading(true);

    let details = {
      firstName,
      lastName,
      phoneNum,
      email,
      address,
      city,
      state,
      zip,
      message,
      date,
    };

    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setLoading(false);
    let result = await response.json();

    if (result.status === "SUCCESS") {
      Swal.fire("Success!", "You order has been submitted", "success");
      resetForm();
    } else {
      Swal.fire("Sorry", "Something went wrong", "error");
    }
  };

  function resetForm() {
    setFirstName("");
    setLastName("");
    setPhoneNum("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setMessage("");
    setDate("");
  }

  return (
    <div
      style={{
        backgroundImage: `url(${require("../../images/background-texture-2.jpg")})`,
      }}
    >
      <NavBar />
      <h1 className="contacth1">Order Something Delicious!</h1>
      <h3 className="contacth3">...or just say hello</h3>
      <Form className="mainForm" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="First Name"
              value={firstName}
              //value={this.state.value}
              // invalid={errors.firstName}
              // onBlur={this.handleBlur("firstName")}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Last Name"
              value={lastName}
              //value={this.state.lastName}
              // invalid={errors.lastName}
              // onBlur={this.handleBlur("lastName")}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              //value={this.state.email}
              // invalid={errors.email}
              // onBlur={this.handleBlur("email")}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label htmlFor="phone">Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter Phone"
              value={phoneNum}
              //value={this.state.email}
              // invalid={errors.email}
              // onBlur={this.handleBlur("email")}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label htmlFor="date">Date Needed By</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date Needed By: mm/dd/yyyy"
              value={date}
              //value={this.state.date}
              // onBlur={this.handleBlur("date")}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            // value={this.state.address}
            // onBlur={this.handleBlur("address")}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              placeholder="Seattle"
              value={city}
              // value={this.state.city}
              // onBlur={this.handleBlur("city")}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label htmlFor="state">State</Form.Label>
            <Form.Control
              placeholder="Georgia"
              value={state}
              // value={this.state.city}
              // onBlur={this.handleBlur("city")}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label htmlFor="zip">Zip</Form.Label>
            <Form.Control
              value={zip}
              // value={this.state.zip}
              // onBlur={this.handleBlur("zip")}
              onChange={(e) => setZip(e.target.value)}
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
        <Form.Group className="mb-3" controlId="controlTextarea1">
          <Form.Label className="describeFormLabel">
            Not finding what you are looking for? Describe your dessert
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          className="contactSubmitButton"
          onClick={() => handleSubmit}
          //Disabling the button when it is loading
          disabled={loading}
        >
          {loading ? "Sending your order..." : "Submit"}
        </Button>
      </Form>
      <Footer />
    </div>
  );
};
// }

export default Contact;
