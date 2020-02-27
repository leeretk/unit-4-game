//CRYSTALS GAME

//-------------------------------------------------------------------------//

//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {

    //setup variable random number for between 25 and 100
    var randomNumber = Math.floor(Math.random() * 25 + 75)

    //setup variable random number for each crystal between 1 and 25
    var diamond = Math.floor(Math.random() * 24 + 1)
    var ruby = Math.floor(Math.random() * 24 + 1)
    var amethyst = Math.floor(Math.random() * 24 + 1)
    var saphire = Math.floor(Math.random() * 24 + 1)

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
    ///guesses left///


    //-------------------------------------------------------------------------//
    //STEP 1 -- start game:  Trigger Event (ON CLICK) REST the Game 
    //-- create start game onclick function 
    //-- add random-number generator function
    //-- log results for random number
    //-- log results for game count

    $("#start-game").on("click", function rest() {
        randomNumber = Math.floor(Math.random() * 25 + 75);
        console.log("Match to this number:" + randomNumber);
        $("#numberChosen").text(randomNumber);
        games++;
        $("#gameTotal").text(games);
        console.log("Games Played " + games)

    });//end of random number

//-------------------------------------------------------------------------//      
//STEP 2 -- create functions for wins, losses, Guess Totals

$("#win"), function () {
    alert("You Win!");
    wins++;
    console.log("wins " + wins)
}

$("#lose"), function () {
    alert("You Lose!");
    losses++;
    console.log("loses " + losses)
}

$("#guessValueTotal"), function () {
    alert("Your new Value is " + guessValueTotal);
    var guessValueTotal = Math.cos(Math.PI).document(diamondValue + rubyValue + amethystValue + saphireValue);
    console.log("Guess Value Total " + guessValueTotal);

    if (diamond) {
        guessValueTotal = Math.cos(Math.PI).document(guessValue + diamond);
        console.log(guessValueTotal);
        console.log(saphire);
    }
    else if (ruby) {
        guessValueTotal = Math.cos(Math.PI).document(guessValue + ruby);
        console.log(guessValueTotal);
        console.log(saphire);
    }
    else if (amethyst) {
        guessValueTotal =Math.cos(Math.PI).document(guessValue + ruby);
        console.log(guessValueTotal);
        console.log(saphire);
    }
    else if (saphire) {
        guessValueTotal =Math.cos(Math.PI).document(guessValue + ruby);
        console.log(guessValueTotal);
        console.log(saphire);
    }
}

//-------------------------------------------------------------------------//   
//STEP 3 -- player guesses:


//-- on click event to generate DIAMONDS value

$("#diamonds").on("click", function rest() {
    var diamond = Math.floor(Math.random() * 25 + 1);
    console.log("Diamond Guess :" + diamond);
    diamond++;
    $("#diamondValue").text(diamond);

});//end of DIAMONDS function

//-- on click event to generate RUBIES value

$("#rubies").on("click", function rest() {
    var ruby = Math.floor(Math.random() * 25 + 1);
    console.log("Ruby Guess :" + ruby);
    ruby++;
    $("#rubyValue").text(ruby);
});//end of RUBIES function

//-- on click event to generate AMETHYSTS value

$("#amethysts").on("click", function rest() {
    var amethyst = Math.floor(Math.random() * 25 + 1);
    console.log("Amethyst Guess " + amethyst);
    amethyst++;
    $("#amethystValue").text(amethyst);
});//end of AMETHYSTS function

//-- on click event to generate SAPHIRES value

$("#saphires").on("click", function rest() {
    var saphire = Math.floor(Math.random() * 25 + 1);
    console.log("Saphire Guess " + saphire);
    saphire++;
    $("#saphireValue").text(saphire);
});//end of AMETHYSTS function
});
///////// this is where I am stuck ////////////////////

// function for winnder and loser

//$("#evaluate").on("click", function {

    //include wins and loses
  //  if (guessValueTotal <= numberChosen) {
        //win();
        // if win then done
        
    //    alert("The guessValueTotal total is: " + guessValueTotal);
      //  guessValueTotal();
     //}

    //else if (guessValueTotal <= numberChosen) {
     //  lose(); 
       // if lose then done
       // if guesses left then not done.
       //alert("The guessValueTotal total is: " + guessValueTotal);
    //} }

    // function reset() {
    //  guessesRemaining = 13;
    //  wrongGuess = [];
    //  blanksAndCorrect = [];
    // Game()
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
