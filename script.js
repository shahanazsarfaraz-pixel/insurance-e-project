    function test(){

let username =document.getElementById("username").value;
let password =document.getElementById("password").value;
if (username == "asp" && password == "asp123123"){

alert("login successful");
window.open("index.html");

}
else{

alert("login failed");

}

}
 function contactform(){

let name =document.getElementById("name").value;
let email =document.getElementById("email").value;
let message =document.getElementById("message").value;
if (name == "ahs" && message == "Hi" && email=="ahs@gmail.com"){

alert("contact form successful");


}
else{

alert("contact form failed");

}
 }
 
$(document).ready(function(){


$("#table1").DataTable();




});