const fs = require('fs')

class Contact {
    name;
    phoneNumber;
    frequency;
    days_until_contact; 
    birth_month;
    birth_day;
    birth_year;
    days_since_last_contact;
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    constructor() {}
}

function enter() {
  const Http = new XMLHttpRequest();
  url='http://localhost:3000';
  Http.open("GET", url, true);
  Http.onreadystatechange = (e) => {
      let person = prompt("Please enter your name");
  }
  Http.send(null);
}
