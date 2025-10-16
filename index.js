/* 
// Meetod, mis kuvab midagi konsoolis
console.log("Hello World!");
console.log("I like cats");
// varjant 2
M = "meetod, mis kuvab midagi veebilehel";
console.log(M);

Alerti meetod
window.alert("This is an alert!");
alert("This is also an alert!");
*/
/*
document.getElementById("demo2").textContent = "This is a paragraph";
document.getElementById("demo").textContent = "This is another paragraph";

let age = 25;
let price = 99.99;
let gpa = 3.5;
console.log(age);
console.log(price);
console.log("you are " + age + " years old");
*/

// Muutujad ja andmetüübid
let firstName = "Laura-Liis";
let lastName = "Pärm";
let age = 23;
let isStudent = true;

document.getElementById("p1").textContent =
  "My name is " + firstName + " " + lastName + ". I am " + age + " years old.";

document.getElementById("p2").textContent = `You are ${firstName}`;

/*
Liitmine: +
Lahutamine: -
Korrutamine: *
Jagamine: /
Jääk: %
Astendamine: **
*/
let result = 6 / 2 ** (2 + 5);
console.log(result);

// Kasutaja sisendi küsimine
let userName = prompt("What is your name?");
console.log(userName);
document.getElementById(
  "p3"
).textContent = `Hello ${userName}, welcome to the website!`;

let userName2;

userName2 = window.prompt("What is your username?");
console.log(userName2);

document.getElementById("mySubmit").onclick = function () {
  userName2 = document.getElementById("myText").value;
  console.log(userName2);
};
