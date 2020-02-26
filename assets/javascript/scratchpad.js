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