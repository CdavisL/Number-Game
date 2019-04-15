var comGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

//reset for when game comes to end
function gameEnded() {
    document.getElementById("newGame").style.display = "inline";
    document.getElementById("easy").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

//set game default/easy mode
function easyMode() {
    maxGuesses = 10;
    document.getElementById("easy").className = "activeButton";
    document.getElementById("hard").className = "";
}

//set game to hard mode
function hardMode() {
    maxGuesses = 5;
    document.getElementById("hard").className = "activeButton";
    document.getElementById("easy").className = "";
}

//starts a new game when new game button is clicked
function newGame() {
    window.location.reload();
}

//gets a number for the computer that the player has to guess
function init() {
    comGuess = Math.floor(Math.random() * 100 + 1);
    //checks to see if working correctly
    //console.log(comGuess);
    document.getElementById("newGame").style.display = "none";
}

//this gets the user input
//it then takes the user input and compares them
function compareGuess() {
    var userGuess = " " + document.getElementById("inputBox").value;
    //checks to see if working correctly
    //console.log(userGuess);

    //keeps track of player guesses
    userGuessLog.push(userGuess);
    //console.log(userGuessLog);

    document.getElementById("guessLog").innerHTML = userGuessLog;

    //keeps track of player attempts
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;

    if (userGuessLog.length < maxGuesses) {
        //if the user input is too high, the player is told so
        //vice versa for too low
        //will tell them if their guess is correct
        if (userGuess > comGuess) {
            document.getElementById("response").innerHTML = "You went over.";
            document.getElementById("inputBox").value = "";
        } else if (userGuess < comGuess) {
            document.getElementById("response").innerHTML = "You went under.";
            document.getElementById("inputBox").value = "";
        } else {
            document.getElementById("response").innerHTML = "You hit the MAGIC NUMBER!" + "<br> You got it in " + attempts + "!";
            document.getElementById("container").style.backgroundColor = "#2E294E";
            gameEnded();
        }
    } else {
        if (userGuess > comGuess) {
            document.getElementById("response").innerHTML = "Game Over." + "<br> The number was " + comGuess + "!";
            document.getElementById("container").style.backgroundColor = "#EADEDA";
            gameEnded();
        } else if (userGuess < comGuess) {
            document.getElementById("response").innerHTML = "Game Over." + "<br> The number was " + comGuess + "!";
            document.getElementById("container").style.backgroundColor = "#A9927D";
            gameEnded();
        } else {
            document.getElementById("response").innerHTML = "You hit the MAGIC NUMBER!" + "You got it in " + attempts + "!";
            document.getElementById("container").style.backgroundColor = "#F2F4F3";
            gameEnded();
        }
    }
}