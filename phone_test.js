const Vonage = require('@vonage/server-sdk')

const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

let http = require('http');

app.use(express.static('../newhacks2022'))

class Contact {
    name;
    phoneNumber;
    frequency;
    days_until_contact; 
    birth_month;
    birth_day;
    birth_year;
    days_since_last_contact;
    constructor() {}
}

const vonage = new Vonage({
  apiKey: "b2406ad6",
  apiSecret: "Dfyp1Lji55NI75Zy"
})

const from = "15815347282"
const to = "****" //REMOVE MEEEEEEEEE
const text = 'A text message sent using the Vonage SMS API'

/*vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})*/

function enter() {
    const Http = new XMLHttpRequest();
    url='http://localhost:3000';
    Http.open("GET", url, true);
    Http.onreadystatechange = (e) => {
        let person = prompt("Please enter your name");
    }
    Http.send(null);
  }

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
