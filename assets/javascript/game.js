var randomResult;
var losses = 0;
var wins = 0;
var firstNumber = 0;

var resetandRestart = function() {

    $(".crystals").empty();
    var image = [
        'http://www.lightworkersworld.com/wp-content/uploads/2015/08/Crystal-Quartz.jpg' , 
        'https://cdn1.iconfinder.com/data/icons/crystal-1/60/red_crystal-512.png' , 
        'http://aux3.iconspalace.com/uploads/5123983611224387580.png' , 
        'https://cdn1.iconfinder.com/data/icons/crystal-1/60/green_crystal_copy-512.png'];

 randomResult = Math.floor(Math.random() * 102) + 19;

 $("#result").html('Random Result: ' + randomResult);

 for(var i = 0; i < 4; i++){

     var random = Math.floor(Math.random() * 11) + 1;
//     //console.log(random)

    
     var crystal = $("<div>");
        crystal.attr({"class": 'crystal', "data-value": random
        });
        
       $(".crystals").append(crystal);   
     }

     $("#firstNumber").html(firstNumber);

 }

 resetandRestart();
 
$(document).on('click', ".crystal", function() {

    var number = parseInt($(this).attr('data-value'));

    firstNumber += number

    $("#firstNumber").html(firstNumber);

    console.log(firstNumber);

    if(firstNumber> randomResult){
        losses++;
        $("#losses").html(losses);

        firstNumber = 0;

        resetandRestart();
    }
    else if(firstNumber === randomResult){
        wins++;
        $("#wins").html(wins);
        firstNumber = 0;

        resetandRestart();
    }
    
    

    });
