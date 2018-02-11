'use strict';

$(document).ready(function() {
	  initializePage();
})

function initializePage(){
    $(".chore img").hide();
    $(".expand").click(function(e){
        e.preventDefault();
        $(".chore img").show();
    })
}
