
//There will be four crystals displayed as buttons on the page.



var choseNumber;
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

    $("#startGame").on("click", function () {

        chosenNumber = $("numbers").click(function () {
            $(this).Math.floor((Math.random() * 100) + 1);
            console.log(chosenNumber)
        });
});




var buttons = ["btn1", "btn2", "btn3", "btn4"];

//STEP xx -- play again:  Trigger Event (ON CLICK) SELECT RANDOM NUMBER 








//STEP 2:  COMPUTER STORES RAND



//STEP 3: PLAYER GUESSES

//playerGuessTotal = function () {
   //     playerGuess + playerGuess + playerGuess + playerGuess +  }

       // $("").hide();  /// hide <p> elements


//      : CRYSTAL BUTTON ARRAY


    //parseInt will turn the string into a number. parseInt( "123" ) = 123 // (implicit decimal)


//on click (crystal) add random number to players total score 

//click crystal add random number to playerTotalScore

//compare total score to computer number 
    //if === then "You win!"
    //else add player guess to total score
    //when totalscore > computerNumber then "You lose!"

/**********************RESET***********************