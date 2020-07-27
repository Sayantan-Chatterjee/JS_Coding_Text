'use strict';
let btn = document.getElementById("btn")
function username() {
  let inpObj = document.getElementById("username").value;
  if (inpObj.length <3) {
    document.getElementById("name").innerHTML = "Username must be atleast 3 characters";
  } else {
    document.getElementById("name").innerHTML = "";
  } 

  let inpObj1 = document.getElementById("email").value;
  if (inpObj1 == "") {
    document.getElementById("email").innerHTML = "Email is valid";
  } else {
    document.getElementById("email").innerHTML = "";
  } 

  let inpObj2 = document.getElementById("Password").value;
  if (inpObj2.length <6) {
    document.getElementById("Password").innerHTML = "Password must be atleast 3 characters";
  } else {
    document.getElementById("Password").innerHTML = "";
  } 

  let inpObj3 = document.getElementById("Password2").value;
  if (inpObj2 != inpObj3  ) {
    document.getElementById("Password2").innerHTML = "Password 2 is not same as password 1";
  } else {
    document.getElementById("Password2").innerHTML = "";
  } 

} 


btn.addEventListener('click',username)
