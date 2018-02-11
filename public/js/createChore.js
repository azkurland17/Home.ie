
'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("#submitBtn").submit(function (event){
		event.preventDefault();
		console.log("the submit has been pressed, not sure how this is connected to the add route??")
	})
}
