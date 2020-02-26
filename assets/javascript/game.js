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
});//end of Number to Guess


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
    var guessValueTotal = (diamond + ruby + amethyst + saphire);
    console.log("Guess Value Total " + guessValueTotal);

    if (diamond) {
        guessValueTotal = guessValue + diamond
    }
    else if (ruby) {
        guessValueTotal = guessValue + ruby
    }
    else if (amethyst) {
        guessValueTotal = guessValue + ruby
    }
    else if (saphire) {
        guessValueTotal = guessValue + ruby
    }
}

//-------------------------------------------------------------------------//   
//STEP 3 -- player guesses:


//-- on click event to generate DIAMONDS value

$("#diamonds").on("click", function rest() {
    var diamond = Math.floor(Math.random() * 25 + 1);
    console.log("Diamond Guess is:" + diamond);
    diamond++;
    $("#diamondValue").text(diamond);    
});//end of DIAMONDS function

//-- on click event to generate RUBIES value

$("#rubies").on("click", function rest() {
    var ruby = Math.floor(Math.random() * 25 + 1);
    console.log("Ruby Guess is:" + ruby);
    ruby++;
    $("#rubyValue").text(ruby);
});//end of RUBIES function

//-- on click event to generate AMETHYSTS value

$("#amethysts").on("click", function rest() {
    var amethyst = Math.floor(Math.random() * 25 + 1);
    console.log("Amethyst Guess is:" + amethyst);
    amethyst++;
    $("#amethystValue").text(amethyst);
});//end of AMETHYSTS function

//-- on click event to generate SAPHIRES value

$("#saphires").on("click", function rest() {
    var saphire = Math.floor(Math.random() * 25 + 1);
    console.log("Amethyst Guess is:" + saphire);
    saphire++;
    $("#amethystValue").text(saphire);
});//end of AMETHYSTS function

// function for winnder and loser



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
