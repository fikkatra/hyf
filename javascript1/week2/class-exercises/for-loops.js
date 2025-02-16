// Create a for loop that logs out the numbers from 74 - 98
for (let i = 74; i <= 98; i++) {
  console.log(i);
}

/* 
Create a function that has two parameters: stringToLog and numberOfTimesToLog

When calling the function it should log out the stringToLog the amount of times specified in numberOfTimesToLog. Use a for loop.
*/
function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}
logString("hello", 3);

/*
Imagine we work at a company. Peter from the HR department wants us to send out a couple of emails to some recepients. 
The only problem is that he sent us the email in a weird format: benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com

Use the sendEmailTo function to send an email to all the recepients that we got from Peter.

Hint use the .split method and look up iterating an array js for loop on google.
*/
// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
  // But really it only logs out a string
  console.log("email sent to " + recepient);
}

const recepients =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
const recepientArray = recepients.split("|");
for (let i = 0; i < recepientArray.length; i++) {
  sendEmailTo(recepientArray[i]);
}
