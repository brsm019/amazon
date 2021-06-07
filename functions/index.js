const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51IyCkCGDpXfgd5Nm8stgabBNB4bOptc2b96cvfgUqIaEbz4iXB3ZbJklfhy4h01VCFfADOrsENbk43iPK0i745Yp00dDk7iiLu");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res)=> res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // targets the query param in front end
  console.log("payment request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/fir-cccd0/us-central1/api
