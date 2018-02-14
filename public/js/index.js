'use strict';

$(document).ready(function() {
	  initializePage();
})

function initializePage(){
   $(".chore img").hide();
    $(".expense img").hide();
    $(".card").click(function(e){
        e.preventDefault();
        $(this).find('img').toggle();
    })
}
