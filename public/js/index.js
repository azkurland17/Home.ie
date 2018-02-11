'use strict';

$(document).ready(function() {
	  initializePage();
})

function initializePage(){
   $(".chore img").hide();
    $(".expense img").hide();
    $(".expand").click(function(e){
        e.preventDefault();
        $(this).parent().parent().find('img').toggle();
    })
}
