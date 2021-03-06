const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const credentials = require("./creds");
const familyRoutes = require("./routes/familiesRoutes");
const familyReviewsRoutes = require("./routes/familyReviewsRoutes");
const contactUsRoutes = require("./routes/contactUsRoutes")
const opinionRoutes = require("./routes/opinionRoutes")
const newsletterRoutes = require("./routes/newsletterRoutes")
const privateMessagesRoutes = require("./routes/privateMessagesRoutes")
const sgMail = require('@sendgrid/mail');


// Create a new Express app
const app = express();

//sendgrid api key
sgMail.setApiKey(credentials.SENDGRID_API_KEY);

// Welcome page of the express server: 
app.get('/', (req, res) => {
  res.send("Welcome Parents help Parents server"); 
});

app.get('/send-email', (req,res) => {
  
  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query; 

  //Sendgrid Data Requirements
  const msg = {
      to: recipient, 
      from: sender,
      subject: topic,
      text: text,
  }

  //Send Email
  sgMail.send(msg)
  .then((msg) => console.log(text));
});

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-z4p4xcdd.auth0.com",
  audience: "https://families/"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-z4p4xcdd.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://${credentials.username}:${credentials.password}@cluster0-im5lw.mongodb.net/parents-help-parents?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

familyRoutes.routes(app);
familyReviewsRoutes.routes(app);
contactUsRoutes.routes(app)
opinionRoutes.routes(app)
newsletterRoutes.routes(app)
privateMessagesRoutes.routes(app)

// Start the app
app.listen(2500, () => console.log("Server at 2500"));
