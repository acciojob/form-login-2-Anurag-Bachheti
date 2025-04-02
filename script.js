// let submit = document.getElementById("submit");
let email = document.getElementById("email");
let number = document.getElementById("number");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");

function submit(){
	alert("First Name: " + firstName.value +" " + "Last Name: " + lastName.value + " " + "Phone Number: " + number.value +" " + "Email ID: " + email.value )
}
document.getElementById("submit").addEventListener("click", submit);