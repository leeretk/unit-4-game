//CRYSTALS GAME

//-------------------------------------------------------------------------//   

//-------------------------------------------------------------------------//

var randomNumber 
var playerGuess

//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {                     

 //-------------------------------------------------------------------------//
    //STEP 1 -- start game:  Trigger Event (ON CLICK) SELECT RANDOM NUMBER 
        //-- create start game onclick function 
            //-- add random-number generator function
            //-- log results for random number
            //-- log results for game count
 
    $("#start-game").on("click", function () {

        $("#random-number").on("click", function() {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log("Match to this Number: " + randomNumber)
            alert("random number is " + randomNumber)
          });//end of random number
    });//end of Number to Guess
     
 //-------------------------------------------------------------------------//    
    //add code here to limit the number of games to 3.  
 


 //-------------------------------------------------------------------------//   
     //STEP 2 -- player guess:  
        //-- on click event to generate player pick

//    $("#player-guess").on("click", function() {
  //      alert("you clicked a crystal!")
    //})    


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