/*********************************************************************
***
#Original Author: Cord Palmer
#Date Created: 09/03/2021                                        #
#Version: 1                                               #
#Date Last Modified: 09/03/2021                             #
#Modified by: Cord Palmer                                           *
*Modification log: 09/03/2021 complete    
                    09/17 edited the wrong js form this one is non functional at the moment                           *
***
******************************************************************** */

"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1").value;
        const email2 = $("#email_2").value;
        const firstName = $("#first_name").value;
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (email1 == "") { 
            errorMessage += "First email is required.\n";
        }
    
        if (email2 == "") { 
            errorMessage += "Second email is required.\n";
        }
    
        if (email1 != email2) { 
            errorMessage += "Both emails must match.\n";
        }
    
        if (firstName == "") {
            errorMessage += "First name is required.\n";
        }
    
        // submit the form if error message is an empty string
        if (errorMessage == "") {
            $("#email_form").submit();
        } else {
            alert(errorMessage);            
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
        $("#last_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});