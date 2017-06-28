//A variable that holds the element ID from the HTML page
var input = document.getElementById("dollarInput");
//the variable declared above attached with an Event Listener for the keyup event
input.addEventListener("keyup", function(event) {
  //This stops the default action of an element from happening
  event.preventDefault();
  //If statement corresponding to the Enter key being pressed
  if (event.keyCode == 13) {
    //the input variable being assinged the HTML divs value
    input = input.value;
    //Defining the coin counter function and refrecing the input 
    function coinCounter (input) {
      //declaration of the coin purse object, which is currently empty
      var cointPurse = {};
      //adding properties to the coin purse object and setting them to 0
      coiinPurse.quarters = 0;
      coinPurse.dimes = 0;
      coinPurse.nickels = 0;
      coinPurse.pennies = 0;
      //deviding and rounding down (with math.floor) the input by .25 and setting it 
      //to the value of input
      coinPurse.quarters = Math.floor(input / 0.25);
      //creating and assigning the remainder variable and devding and taking the remainder from 0.25
      remainder = input % 0.25;
      //dividing the remainder variable by .10 and rounding down and putting into the coinpurse.dimes property
      coinPurse.dimes = Math.floor(remainder / 0.10);
      //defining the remainder and dividing by .10 to get the remainder
      remainder = remainder % 0.10;
      //dividing the remainder by .05 and roundig down and setting into the coinPurse.nickels
      coinPurse.nickels = Math.floor(remainder / 0.05);
      //defining the remainder to be the remainder of division of .05
      remainder = remainder % 0.05;
      //dividing the variable of the remainder by .01 and rounding down and setting it to the vlaue of coinPurse.pennies
      coinPurse.pennies = Math.floor(remainder / 0.01);
      //setting the remainder to be the remainder of division of .01 ( this should be o at this point)
      remainder = remainder % 0.01;

      //return to the CoinPurse object which containg the quarters,dimes,nickels,and pennies properties and keys
      return coinPurse;
    }
//this sets a variable and defines it as the coinCounter function wich passes the argument of the user input
var coins = coinCounter(input)
//This logs into the console the variable coins which contains a function that executes all the arithemtic.
console.log(coins);
}
})