// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

//CRYSTALS GAME

//-------------------------------------------------------------------------//

//ensure the code doesn't run until the HTML is finished loading:

$(document).ready(function () {

    //setup variable random number for between 25 and 100
    var randomNumber = Math.floor(Math.random() * 25 + 75);

    //setup variable for scoring
    var games = 0;
    var wins = 0;
    var losses = 0;
    var guesses = 0;
    var guessesRemaining = 4;
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
    $("#guessValueTotal").Math(sum[diamond + ruby + amethyst + saphire]);
    $("#guessesRemaining").text(guessesRemaining);
      ///guesses left///

    //-------------------------------------------------------------------------//
    //STEP 1 -- start game:  Trigger Event (ON CLICK) REST the Game 
    //-- create start game onclick function 
    //-- add random-number generator function
    //-- log results for random number
    //-- log results for game count

    $("#start-game").on("click", function reset() {
        randomNumber = parseInt(Math.floor(Math.random() * 25 + 75));
        console.log("Match to this number:" + randomNumber);
        $("#numberChosen").text(randomNumber);
        games++;
        guessesRemaining--;
        $("#gameTotal").text(games);
        console.log("Games Played " + games);
        console.log("Guesses Remaining " + guessesRemaining);
     });//end of random number

    //-------------------------------------------------------------------------/
    //-------------------------------------------------------------------------//   
    //STEP 3 -- player guesses:


    //-- on click event to generate DIAMONDS value

    $("#diamonds").on("click", function() {
        var diamond = parseInt(Math.floor(Math.random() * 25 + 1));
        console.log("Diamond Guess :" + diamond);
        diamond++;
        console.log("Diamond Value " + diamond)
        $("#diamondValue").text(diamond);
        guesses++;
        console.log("Guess Count " + guesses);
        guessesRemaining--;
        console.log("Guesses Remaining " + guessesRemaining);
        winOrLose();
    });//end of DIAMONDS function

    //-- on click event to generate RUBIES value

    $("#rubies").on("click", function() {
        var ruby = parseInt(Math.floor(Math.random() * 25 + 1));
        console.log("Ruby Guess :" + ruby);
        ruby++;
        console.log("ruby value " + ruby)
        $("#rubyValue").text(ruby);
        guesses++;
        guessesRemaining--;
        console.log("Guess Count " + guessesRemaining);
        console.log("Guesses Remaining " + guessesRemaining);
        winOrLose();
    });//end of RUBIES function

    //-- on click event to generate AMETHYSTS value

    $("#amethysts").on("click", function() {
        var amethyst = parseInt(Math.floor(Math.random() * 25 + 1));
        console.log("Amethyst Guess " + amethyst);
        amethyst++;
        console.log("amethyst value " + amethyst)
        $("#amethystValue").text(amethyst);
        guesses++;
        guessesRemaining--;
        console.log("Guess Count " + guessesRemaining);
        console.log("Guesses Remaining " + guessesRemaining);
        winOrLose();
    });//end of AMETHYSTS function;

    //-- on click event to generate SAPHIRES value

    $("#saphires").on("click", function() {
        var saphire = parseInt(Math.floor(Math.random() * 25 + 1));
        console.log("Saphire Guess " + saphire);
        saphire++;
        console.log("saphire value " + saphire)
        $("#saphireValue").text(saphire);
        guesses++;
        guessesRemaining--;
        console.log("Guess Count " + guessesRemaining);
        console.log("Guesses Remaining " + guessesRemaining);
        winOrLose();
    });//end of SAPHIRE function

    //STEP 2 -- create functions for wins, losses, Guess Totals

    function winOrLose() {
        var guessValueTotal = parseInt(Math.floor(diamond + ruby + amethyst + saphire));
        console.log("Guess Value Total " + guessValueTotal);

        for (i=0; i == randomNumber; i++) {
         
            if (guessValueTotal < randomNumber) {
                guesses--;
                console.log("Number of Guesses: " + guesses);
                console.log("Number of Guesses Remaining" + guessesRemaining)
                $("#guessagain").html("Guess Again");
                $("#lost").html("Guess Again: " + guessValue);
                reset();
             }

        else if (guessValueTotal === randomNumber) {
            wins++;
            console.log("Number of wins: " + wins);
            $("#winner").html("You Win");
            reset();
        }

        else if (guessValueTotal > randomNumber) {
            losses++;
            console.log("Number of Losses: " + losses);
            $("#loser").html("You Lost");
            $("#lost").html("Lost: " + losses);
            alert("You Lose!");
            losses++;
            console.log("loses " + losses);
            reset();
            }   
        }
    };



});

;