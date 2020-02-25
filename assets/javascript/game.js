//CRYSTALS GAME
//------------------------------------------------------------------------------------------//    

//Games Variables
var gameCounter=3;        //count games played

//Game Outcome Variables 
var gameOutcomes = ["win", "lose"]
var win = 0;                //when total guess score matches the random number.
var lose = 0;               //when total guess score does not match the random number.
var gameOutcomeHolder;      //collects all wins and loses until reload

//Guess Variables 
var guessCounter = 4;       //count guesses

//Guess Outcome Variables

var gameGuesses = ["correct", "incorrect"]
var playerGuess = [];   // player guess when they click a crystal
var guessHolder;        //
var playerGuessTotal;   // add all guesses to get total score

//------------------------------------------------------------------------------------------//

//ensure the code doesn't run until the HTML is finished loading:
$(document).ready(function () {                     

//------------------------------------------------------------------------------------------//    
    //STEP 1 -- start game:  Trigger Event (ON CLICK) SELECT RANDOM NUMBER 
        //-- create start game onclick function 
            //-- add random-number generator function
            //-- log results for random number
            //-- log results for game count

    $("#start-game").on("click", function () {
        
        $("#random-number").text(Math.floor(Math.random() * 100)); {     
        var randomNumber = Math.floor(Math.random() * 100); 
        console.log("random number " + randomNumber);
        console.log("game count " + gameCounter++);
        }; //end of random number
    });//end of ChosenNumber
//------------------------------------------------------------------------------------------//    
    //add code here to limit the number of games to 3.  

//------------------------------------------------------------------------------------------//    
    //STEP 2 -- user guess:  
        //-- on click event to generate users pick 
        //-- click btn1, 2, 3, 4
        //-- connect btn to image
        //-- when user clicks button 
            //-generate random number
            //-log random number to guessHolder
            //-log guess results
                    //player guess = randomNumber --> you win!
                    //player guess <= randomeNumber --> guess again!
                       
                        //on click of 2nd btn
                            //IF.... player guess = randomNumber --> you win!    
                            //ELSE... player guess <= randomeNumber --> guess again!
                            
                        //on click of 3rd btn
                            //IF.... player guess <= randomeNumber --> guess again!
                            //ELSE...player guess = randomNumber --> you win!
                        //on click of 4rd btn
                            //IF.... player guess <= randomeNumber --> guess again!
                            //ELSE...player guess = randomNumber --> you win!  


    if (playerGuess === randomNumber)  //button 1



        $("#player-total").on("click", function () {

        //button 1
        $("#btn1").text(Math.floor(Math.random() * 10));
        var playerGuess = "";  //string to hold random number

        $("#random-number").text(Math.floor(Math.random() * 100)); {     
            var randomNumber = Math.floor(Math.random() * 100); 
            console.log(randomNumber);
            }; //end of random number


     else if { //button 2

        $("#btn2").text(Math.floor(Math.random() * 10));
        var playerGuess = "";  //string to hold random number

        $("#random-number").text(Math.floor(Math.random() * 100)); {     
            var randomNumber = Math.floor(Math.random() * 100); 
            console.log(randomNumber);
            }; //end of random number

            playerTotal = random + playerGuess;
            console.log("player guess " + playerGuess);


            }

    else if {

        $("#btn3").text(Math.floor(Math.random() * 10));
        var playerGuess = "";  //string to hold random number

        for (var i = 0; i < 9; i++) {                           // initiate a loop to generate random numbers between 0 and 99.
            var random = Math.floor(Math.random() * 10);
            playerTotal = random + playerGuess;
            console.log("player guess " + playerGuess);
        };//end of random number

    }    

    else {
        $("#btn4").text(Math.floor(Math.random() * 10));
        var playerGuess = "";  //string to hold random number

        for (var i = 0; i < 9; i++) {                           // initiate a loop to generate random numbers between 0 and 99.
            var random = Math.floor(Math.random() * 10);

            playerTotal = random + playerGuess;
            console.log("player guess " + playerGuess);
        };//end of random number

    }


    });//end of ChosenNumber




    //  $(".user-guess").on("click", function() {


    //     ​console.log("You clicked a button!!");

    // function reset() {
    //  guessesRemaining = 13;
    //  wrongGuess = [];
    //  blanksAndCorrect = [];
    // Game()
    //}

    //  keep an array of previous guesses and check ea guess against what the user has alerady guessed

    //STEP 3 -- add user guesses: get the user guess total

    //STEP 4 -- compare user guess total to random number

    //STEP 5 -- If Win

    //STEP 6 -- If Lose
});//end of script



