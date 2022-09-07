var input = document.querySelectorAll("input");
var initial = document.querySelector(".initial");
var quantity = document.querySelector(".quantity");
var current = document.querySelector(".current");
var btn = document.querySelector("button");
var output = document.querySelector(".result");
var hero = document.querySelector(".hero");

const profitsound = new Audio("sounds/cash.mp3");
const success = new Audio("sounds/success.mp3");
const losesound = new Audio("sounds/aww.mp3");
const okay = new Audio("sounds/okay.mp3");
const wrong = new Audio("sounds/wrong.mp3");

function showMsg(msg) {
  output.innerText = msg;
}
function calculatePL(init, quant, curr) {
  if (curr > init) {
    //profit
    var profit = (curr - init) * quant;
    var percentage = (profit / (init * quant)) * 100;
    showMsg(
      `Great Job🥳🎉, You have chosen the right Stock.💹 \nPROFIT = ${profit} \nPROFIT PERCENTAGE= ${percentage.toFixed(
        2
      )}%`
    );
    //if profit percentage is greater than 30%
    if (percentage >= 30) {
      output.style.background = "#03903c";
      success.play();
    } else {
      profitsound.play();
    }
    hero.style.rotate = "297deg";
    hero.style.transition = "0.9s";
  } 
  else if (curr === init) {
    //no gain no loss
    showMsg("No Profit No Loss🤨, It's Okay 🙂");
    okay.play();
  } else {
    //loss
    var loss = (init - curr) * quant;
    var lossPercentage = (loss / (init * quant)) * 100;
    showMsg(
      `Oh No...😟Look like you need to update your portfolio. 🔻\nLOSS = ${loss} \nLOSS PERCENTAGE = ${lossPercentage.toFixed(
        2
      )}%`
    );
    losesound.play();

    //if percentage is more than 50
    if (lossPercentage >= 50) {
      hero.style.rotate = "103deg";
      hero.style.transition = "0.9s";
      output.style.background = "red";
      hero.style.animation = "shake 0.3s 10";
      wrong.play();
    }
  }
}

btn.addEventListener("click", function () {
  var init = Number(initial.value);
  var quant = Number(quantity.value);
  var curr = Number(current.value);
  if (initial.value == "" || quantity.value == "" || current.value == "") {
    showMsg("Please enter a valid number");
  } else if (init <= 0 || quant <= 0 || curr <= 0) {
    showMsg("Please enter a valid number");
  } else {
    calculatePL(init, quant, curr);
  }
});

//Profit percentage (P%) = (Profit /Cost Price) x 100
// Loss percentage (L%) = (Loss / Cost price) x 100

// Profit or Gain = Selling price – Cost Price
// Loss = Cost Price – Selling Price

// What to do----
//
// Take user's stock price for one stock when he bought it
// Take the quantity as well

// Now, take today's stock price for that stock and

// Tell the user how much profit or loss he/she is making

// tell it in percentage
// tell it in absolute too
// bonus
// use right emoji or graphics to show profit/loss
// can you change the entire theme of the app to sad if someone has lost more than 50%
