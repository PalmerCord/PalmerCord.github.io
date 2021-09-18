/*********************************************************************
***
#Original Author: Cord Palmer
#Date Created: 09/03/2021                                        #
#Version: 1                                               #
#Date Last Modified: 09/03/2021                             #
#Modified by: Cord Palmer                                           *
*Modification log: 09/03/2021 complete                               *
***
******************************************************************** */

"use strict";

// the event handler for the click event of each <a> element
$(document).ready( () => 
            $("#accordion").accordion({ 
                event: "click",
                heightStyle: "content",
                collapsible: true,
                active: false
            })
        )