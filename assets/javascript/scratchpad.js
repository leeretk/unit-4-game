scratchpad

$(".start-game").on("click", function () {

    $("#random-number").text(Math.floor(Math.random() * 10));
        var chosenNumber = "";  //string to hold random number
        for (var i = 0; i < 9; i++) {                           // initiate a loop to generate random numbers between 0 and 99.
            var random = Math.floor((Math.random() * 100));
            chosenNumber = random + chosenNumber;
            console.log(random);

    };//end of random number
});//end of ChosenNumber

//STEP 2 -- user guess:  Get the user's pick

$(".player-total").on("click", function () {

    $("#player-guess").text(Math.floor(Math.random() * 10));
        var playerGuess = "";  //string to hold random number
        for (var i = 0; i < 9; i++) {                           // initiate a loop to generate random numbers between 0 and 99.
            var random = Math.floor(Math.random() * 10);

            playerTotal = random + playerGuess;
            console.log(playerGuess);