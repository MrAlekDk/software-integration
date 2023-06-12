import express from "express";
import twilio from "twilio";

import "dotenv/config";

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC42421619408ec41c27bcba291dc5558c";
const authToken = "98da679eda320c0c1487ce87ee2e5ed3";
const client = twilio(accountSid, authToken);

export default client;