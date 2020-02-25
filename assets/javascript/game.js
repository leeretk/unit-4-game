
//There will be four crystals displayed as buttons on the page.

var buttons = ["btn1", "btn2", "btn3", "btn4"];

var playerGuess = [];   // player guess when they click a crystal
var guessHolder;        //
var playerGuessTotal;   // add all guesses to get total score

var win;                //when total guess score matches the random number.
var lose;               //when total guess score does not match the random number.
var gamesWon;           //adds all games won until reload
var gamesLost;          //adds all games lost until reload
var gameCounter;        //count games played
var guessCounter;       //count guesses

$(document).ready(function () {

    //STEP 1 -- start game:  Trigger Event (ON CLICK) SELECT RANDOM NUMBER 


    $(".start-game").on("click", function () {

        $("#random-number").text(Math.floor(Math.random() * 100));
            var chosenNumber = "";  //string to hold random number
            for (var i = 0; i < 9; i++) {                           // initiate a loop to generate random numbers between 0 and 9.
                var random = Math.floor((Math.random() * 100));
                chosenNumber = random + chosenNumber;
                console.log(random);
        };//end of random number
    });//end of ChosenNumber

    //STEP 2 -- user guess:  Get the user's pick

    $(".player-total").on("click", function () {

        $("#player-guess").text(Math.floor(Math.random() * 100));
            var playerGuess = "";  //string to hold random number
            for (var i = 0; i < 9; i++) {                           // initiate a loop to generate random numbers between 0 and 9.
                var random = Math.floor(Math.random() * 100);
                playerTotal = random + playerGuess;
                console.log(random);
                console.log(playerGuess);
        };//end of random number
    });//end of ChosenNumber


      //  $(".user-guess").on("click", function() {
                   
           
        //     ​console.log("You clicked a button!!");
    
    
    //STEP 3 -- add user guesses: get the user guess total

    //STEP 4 -- compare user guess total to random number

    //STEP 5 -- If Win

    //STEP 6 -- If Lose
});//end of script



