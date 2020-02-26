//CRYSTALS GAME
//------------------------------------------------------------------------------------------//    

//Game Outcome Variables 
var gameOutcomes = ["win", "lose"]
var win = 0;                //when total guess score matches the random number.
var lose = 0;               //when total guess score does not match the random number.
var gameOutcomeHolder;      //collects all wins and loses until reload

//Guess Outcome Variables
var gameGuesses = ["correct", "incorrect"]
var playerGuess = [];   // player guess when they click a crystal
var guessHolder;        //
var playerGuessTotal;   // add all guesses to get total score

//Games Variables
var gameCounter=3;        //count games played

//Guess Variables 
var guessCounter = 4;       //count guesses

//------------------------------------------------------------------------------------------//
    //ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {                     

 //-----------------------------------------------------------------------------------------//
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
 //----------------------------------------------------------------------------------------//    
    //add code here to limit the number of games to 3.  

 //--------------------------------------------------------------------------------------//    
    //STEP 2 -- plaer guess:  
        //-- on click event to generate player pick
        //-- click btn1, 2, 3, 4
        //-- connect btn to image
        //-- when player clicks button 
            //-generate random number
            //-log random number to guessHolder
            //-log guess results
                    //player guess = randomNumber --> you win!
                    //player guess <= randomNumber --> guess again!
                       
                        //on click of 2nd btn
                            //IF.... player guess = randomNumber --> you win!    
                            //ELSE... player guess <= randomeNumber --> guess again!
                            
                        //on click of 3rd btn
                            //IF.... player guess <= randomeNumber --> guess again!
                            //ELSE...player guess = randomNumber --> you win!
                        //on click of 4rd btn
                            //IF.... player guess <= randomeNumber --> guess again!
                            //ELSE...player guess = randomNumber --> you win!  
                //-log game results
                    //IF .... gameoutcome = "win" 
                        //add wins 
                    //ELSE... gameoutcome = "lose" 
                        //add losses

    if (playerGuess === randomNumber)  {
    
        //button 1
        $("#btn1").text(Math.floor(Math.random() * 10));
        var playerGuess = "";  //string to hold random number

        $("#guess1").text(Math.floor(Math.random() * 100)); {     
            var randomNumber = Math.floor(Math.random() * 100); 
            console.log(randomNumber);
        }; //end of random number

        $("#player-total").on("click", function () {
            playerGuessTotal = bt1+bt2+btn3+btn4
        }
           
        else if { 

                //button 2
                $("#btn2").text(Math.floor(Math.random() * 10));
                var playerGuess = "";  //string to hold random number

                $("#guess2").text(Math.floor(Math.random() * 100)); {     
                    var randomNumber = Math.floor(Math.random() * 100); 
                    console.log(randomNumber);
                }; //end of random number

                $("#player-total").on("click", function () {
                    playerGuessTotal = bt1+bt2+btn3+btn4
            }

                    else if {

                        $("#btn4").text(Math.floor(Math.random() * 10));
                        var playerGuess = "";  //string to hold random number

                        $("#guess4").text(Math.floor(Math.random() * 100)); {     
                            var randomNumber = Math.floor(Math.random() * 100); 
                            console.log(randomNumber);
                        }; //end of random number

                        $("#player-total").on("click", function () {
                            playerGuessTotal = bt1+bt2+btn3+btn4
                    };
                };

  

                  
//  $(".player-guess").on("click", function() {


    //     ​console.log("You clicked a button!!");

    // function reset() {
    //  guessesRemaining = 13;
    //  wrongGuess = [];
    //  blanksAndCorrect = [];
    // Game()
    //}

    //  keep an array of previous guesses and check ea guess against what the player has alerady guessed

    //STEP 3 -- add player guesses: get the player guess total

    //STEP 4 -- compare player guess total to random number

    //STEP 5 -- If Win

    //STEP 6 -- If Lose

});//end of script



