const Vonage = require('@vonage/server-sdk')

const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

let http = require('http');

//app.use(express.static('directory'))

const vonage = new Vonage({
  apiKey: "b2406ad6",
  apiSecret: "Dfyp1Lji55NI75Zy"
})

const from = "15815347282"
const to = "16476310888"
const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hi There! I am Sara');
    response.end();
};

http.createServer(handleRequest).listen(8000);