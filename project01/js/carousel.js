/*********************************************************************
***
#Original Author: Cord Palmer
#Date Created: 09/10/2021                                        #
#Version: 1                                               #
#Date Last Modified: 09/10/2021                              #
#Modified by: Cord Palmer                                           #
#Modification log: 09/10/2021 Created page     #                               *
***
******************************************************************** */
"use strict";

$(document).ready( () => {
    $('.slider').bxSlider();
    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 800 > -7200) {
            newLeftProperty = leftProperty - 800;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 800;
        }
        else {
            newLeftProperty = -6400;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });

});