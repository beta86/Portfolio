        
        //////// PLAYER 1 ///////
var randomNumber1 = Math.floor(Math.random() * 6)+1; //Random number from 1-6
var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //adds the random number to image file name
                                                                
var image1 = document.querySelectorAll("img")[0]; // selects the image located at img1
image1.setAttribute("src", randomDiceImage); // selects which dice to diplay

        /////// PLAYER 2 ///////
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
} else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "It's a Draw";
} else {
    document.querySelector("h1").innerText = "Player 2 Wins";
}



