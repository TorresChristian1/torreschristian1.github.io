const greeting = () => {
let userName = prompt("What is your name");

document.querySelector("#devName").innerHTML = `Welcome, ${userName}`

};

greeting();
