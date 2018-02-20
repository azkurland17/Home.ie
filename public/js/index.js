'use strict';

$(document).ready(function() {
	  initializePage();
})

function initializePage(){
   $(".chore canvas").hide();
    $(".expense canvas").hide();
    $(".card").click(function(e){
        e.preventDefault();
        var graphId = $(this).find('canvas').attr("id");
        makeChart(graphId);
        $(this).find('canvas').toggle();
    })

    $(".doneBtn").click(function(e){
        e.preventDefault();
        $(this).parent().parent().parent().toggleClass('chore_content doneGray');
        $(this).html("Revive");
        $(this).toggleClass(`doneBtn reviveBtn`);
        $(this).toggleClass(`btn-success btn-danger`);

        //get rid of it from the json file. 
    })

    $(".reviveBtn").click(function (e){
        e.preventDefault();
        $(this).html("Done");
        $(this).toggleClass(`btn-danger btn-success`);
        $(this).parent().parent().parent().toggleClass('doneGray chore_content');
        $(this).toggleClass(`reviveBtn doneBtn`);
    })

    $(".boughtBtn").click(function(e){
        e.preventDefault;
        $(this).parent().parent().parent().hide();
    })

    
}
function makeChart(graphId){
var graph = document.getElementById(graphId);
var ctx = graph.getContext('2d');
console.log("This is the value returned from getElementByClassName",ctx);
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["All", "KB", "Youxi", "Alex"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}
