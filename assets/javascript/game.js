
var win = 0;
var loss = 0;
var crystal = ["#crystalBlue", "#crystalRed", "#crystalGreen", "#crystalPurple"];

//this is where the random number to beat will be 


$(document).ready(function () {
    var numberToBeat = "";

    for (var i = 0; i < 1; i++) {

        var numberToBeat = Math.floor(Math.random() * 120) + 1;
    }
    $("#numberToBeat").text(numberToBeat);
    console.log("#numberToBeat");
});

var totalScore= 0;
//this next spot will give value to the cystals...maybe. 
//trying to use the image to click and create a value
$(".crystal").on("click", crystal, function () {



    for (var i = 0; i < 1; i++) {

        var crystal = Math.floor(Math.random() * 12) + 1;
         totalScore += crystal ;
    
        //this is going to print out the total score 

        
        console.log("#totalScore");
    }

    $("#totalScore").text(totalScore);
//prints out the loss and wins
    
    if (totalScore === numberToBeat) {
        win++;
       $(".win").text("Win: " + win);
    
    }
    
    else {
        loss++;
        $(".loss").text("Loss: " + loss);
    }
    
    
});
