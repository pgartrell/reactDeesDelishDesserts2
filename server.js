const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
dotenv.config();
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.address; 
    const city = req.body.city;
    const zip  = req.body.zip;
    const date = req.body.date;
    const phoneNum= req.body.phoneNum
    const mail = {
      from: email,
      to: "lloliepopps@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Message: ${address}</p>
             <p>City: ${city}</p>
             <p>Zip: ${zip}</p>
             <p>Date: ${date}</p>
             <p>Phone Number: ${phoneNum}</p>
             `,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "SUCCESS" });
      }
    });
  });