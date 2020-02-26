//CRYSTALS GAME

//-------------------------------------------------------------------------//

//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {                     
    
    //setup variable random number for between 25 and 100
    var randomNumber = Math.floor(Math.random() * 25+75)

    //setup variable random number for each crystal between 1 and 25
    var diamond = Math.floor(Math.random() * 24+1) 
    var ruby = Math.floor(Math.random() * 24+1) 
    var amethyst = Math.floor(Math.random() * 24+1) 
    var saphire = Math.floor(Math.random() * 24+1) 

    //setup variable for scoring
    var games = 0;
    var wins = 0;
    var losses = 0;
    var guesses = 0;
    var guessValue = 0; 
    var diamond = 0;
    var ruby = 0;
    var amethyst = 0;
    var saphire = 0;

    //set variables to collect totals    
    $("#win").text(wins);
    $("#lose").text(losses);
    $("#gamesPlayed").text(games);
    $("#numberChosen").text(randomNumber);
    $("#totalGuesses").text(guesses);
    $("#diamondValue").text(diamond);
    $("#rubyValue").text(ruby);
    $("#amethystValue").text(amethyst);
    $("#saphireValue").text(saphire);
    $("#guessValueTotal").text(guessValue);
  //-------------------------------------------------------------------------//
    //STEP 1 -- start game:  Trigger Event (ON CLICK) REST the Game 
        //-- create start game onclick function 
            //-- add random-number generator function
            //-- log results for random number
            //-- log results for game count
    
    $("#start-game").on("click", function rest() {
        randomNumber = Math.floor(Math.random() * 25+75);
        console.log("Match to this number:" + randomNumber);
        $("#numberChosen").text(randomNumber);
        games++;
        $("#gameTotal").text(games);        
        console.log("Games Played " + games)
        
          });//end of random number
    });//end of Number to Guess

 //-------------------------------------------------------------------------//      
    //STEP 2 -- create functions for wins, losses, Guess Totals

    $("#win"), function() {
        alert("You Win!");
        wins++;
        console.log("wins " + wins)
    } 

    $("#lose"), function() {
        alert("You Lose!");
        losses++;
        console.log("loses " + losses)
    } 

    $("#guessValueTotal"), function() {
        alert("Your new Value is " + guessValueTotal);
        guessValueTotal = (diamond + ruby + amethyst + saphire);      
        console.log("Guess Value Total " + guessValueTotal);
    }

 //-------------------------------------------------------------------------//   
     //STEP 3 -- player guesses:  
        //-- on click event to generate player pick
       
    $("#diamonds").on("click", function rest() {
            var diamond = Math.floor(Math.random() * 25+1);
            console.log("Guess is:" + diamond);
            diamond++;
            $("#diamondValue").text(diamond);
       
            //include wins and loses
                if (diamond == numberChosen) {
                          win();
                 }
                else if (diamond == numberChosen) {
                         lose(); 
                 }
                 guessValueTotal();

       });//end of diamond function

       $("#rubies").on("click", function rest() {
        var ruby = Math.floor(Math.random() * 25+1);
        console.log("Guess is:" + ruby);
        ruby++;
        $("#rubyValue").text(ruby);
   
        //include wins and loses
            if (ruby == numberChosen) {
                      win();
             }
            else if (ruby == numberChosen) {
                     lose(); 
             }
             guessValueTotal();

        });//end of ruby function
    
        $("#amethysts").on("click", function rest() {
            var amethyst = Math.floor(Math.random() * 25+1);
            console.log("Guess is:" + amethyst);
            ruby++;
            $("#amethystValue").text(amethyst);
       
            //include wins and loses
                if (amethyst == numberChosen) {
                          win();
                 }
                else if (amethyst == numberChosen) {
                         lose(); 
                 }
                 guessValueTotal();
    
            });//end of ruby function



   //  $("#guess1").text(Math.floor(Math.random() * 100)); {     
      //   var button1 = Math.floor(Math.random() * 100); 
     //    console.log(guess1);
     //}; //end of random number

     //$("#player-total").on("click", function () {
      //   playerGuessTotal = bt1+bt2+btn3+btn4
    // }

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

//});//end of script