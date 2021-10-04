const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51IINF0LCegZ3sUt0yEer6w40YXg4K0pmG05fCGIcapb2dyurpNAr3NCwL22H9c5bkIxMndX868GgRuVApTN5ecXM00DlIcqI8F')

//API

//API - Config
const app = express();

// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API-routes
app.get('/', (request, response) => response.status(200).send('hello world'));
//app.get('/muindi', (request, response) => response.status(200).send('Whats up Averc?'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
s
     console.log("Payment Request Received Boom!!! for this amount ", total);

  const paymentIntent = await stripe.paymentIntents.create({
      amount: total, //subunits of currency
      currency: "usd",
  });
  //-OK created
   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   }); 

})

//- Listen Command
exports.api = functions.https.onRequest(app);


//Example endpoint
//http://localhost:5001/challenge-1dcd6/us-central1/api  