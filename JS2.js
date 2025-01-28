
var firstname = prompt("Enter your first name: ");
var lastname = prompt("Enter your last name: ");
var birthyear = prompt("Enter your birthyear: ");
var age=2025-birthyear;

document.getElementById("display").innerHTML = "Hello "+firstname+" "+lastname+"! How does it feel to be "+age+" years old?";