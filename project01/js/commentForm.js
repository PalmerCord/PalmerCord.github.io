/*********************************************************************
***
#Original Author: Cord Palmer
#Date Created: 09/03/2021                                        #
#Version: 1                                               #
#Date Last Modified: 09/03/2021                             #
#Modified by: Cord Palmer                                           *
*Modification log: 09/03/2021  built non operational js                                *
***
******************************************************************** */

"use strict"
const $ = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    

const name = $("#name").value;
const comment = $("#comment").value;


 $("#commentForm").addEventListener("click", () => {
if (name.length == 0) {
    alert("Please enter a name."); }
if (comment.length == 0) {
    alert("Please enter a comment."); }

    const interest = $("#interest").value;
 

if (interst == "wellness") {
    }
else if (interest == "corporate") {
    }
else if (interest == "vacation") {
    }
else if (interest == "other") {
    }
else {
    alert("Please select from the options."); } 

    if (isValid) {
      //  $("#registration_form").reset();
        $("#commentForm").submit(); 
    }
});

$("#clear_form").addEventListener("click", () => {
    $("#name").value = "";
    $("#comment").value = "";
    $("#interest").value = "";

    $("#name").focus();
});

$("#email_1").focus();
    

});




