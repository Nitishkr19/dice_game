var randomNumber1;

var randomDiceImage;

var randomImageSource;

var image1;

var randomNumber2;

var prize=100;

for (var i = 0; i < document.querySelectorAll(".button").length; i++) {

    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        ran();
        var inp = this.innerHTML;
        check(inp);
    })
}
function ran() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1;

    randomDiceImage = "dice" + randomNumber1 + ".png";

    randomImageSource = "images/" + randomDiceImage;

    image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
}
function check(inp) {
    if (inp === "SEVEN UP") {
        if (randomNumber1 + randomNumber2 > 7) {
            prize+=5;
            document.querySelector("h1").innerHTML = "Player  Wins!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
        else if (randomNumber2 + randomNumber1 < 7) {
            prize-=5;
            document.querySelector("h1").innerHTML = "Player Lose!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
        else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }

    else if (inp === "SEVEN DOWN") {
        if (randomNumber1 + randomNumber2 < 7) {
            prize+=5;
            document.querySelector("h1").innerHTML = "Player  Wins!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
        else if (randomNumber2 + randomNumber1 > 7) {
            prize-=5;
            document.querySelector("h1").innerHTML = "Player Lose!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
        else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }

    if (inp === "SEVEN") {
        if (randomNumber1 + randomNumber2 > 7) {
            prize-=5;
            document.querySelector("h1").innerHTML = "Player Lose!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
        else if (randomNumber2 + randomNumber1 < 7) {
            prize-=5;
            document.querySelector("h1").innerHTML = "Player Lose!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
        else {
            prize+=10;
            document.querySelector("h1").innerHTML = "Player  Wins!";
            document.querySelector("h2").innerHTML = "Balance: "+prize;
        }
    }
}
