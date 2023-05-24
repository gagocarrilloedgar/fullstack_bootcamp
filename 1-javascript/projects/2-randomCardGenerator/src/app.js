/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Generate a new card
  const newCard = generateRandomCard();

  // Defining the DOM elements with JS
  const cardDOM = document.getElementById("random-card");
  const symbolsDOM = document.getElementsByClassName("symbol");
  const cardNumberDOM = document.querySelector(".centralnumber");

  // Applying the color to the DOM
  if (newCard.suit == "♦" || newCard.suit == "♥")
    cardDOM.classList.add("red-suit");
  else cardDOM.classList.add("black-suit");
  // Applying the Card Number to the DOM
  cardNumberDOM.innerHTML = newCard.cardNumber;
  // Applying the Card Suit to the DOM
  for (const symbol of symbolsDOM) {
    symbol.innerHTML = newCard.suit.toString();
  }
};

document.getElementById("random-card").onclick = applyCardToDom;
document.getElementById("btn-new-card").onclick = applyCardToDom;

// Generate a new card from 5s to 5s
let intervalCardGenerator = setInterval(applyCardToDom, 2000);
const setNewIntervalOnClick = () => {
  clearInterval(intervalCardGenerator);
  intervalCardGenerator = setInterval(applyCardToDom, 2000);
};
document
  .getElementById("btn-new-card")
  .addEventListener("click", setNewIntervalOnClick);

//
document.getElementById("height").onchange = function(e) {
  let cardDOM = document.getElementById("random-card");
  cardDOM.style.height = e.target.value + "px";
};
document.getElementById("width").onchange = function(e) {
  let cardDOM = document.getElementById("random-card");
  cardDOM.style.width = e.target.value + "px";
};

function generateRandomCard() {
  // Defining the arrays with the possible card numbers and suits
  const cardsArr = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suitsSymbols = ["♣", "♦", "♥", "♠"];

  // Random selecting a card number and a suit
  const cardNumber = selectRandom(cardsArr);
  const suit = selectRandom(suitsSymbols);

  return {
    cardNumber: cardNumber,
    suit: suit
  };
}

function applyCardToDom() {
  // Generate a new card
  const newCard = generateRandomCard();

  // Defining the DOM elements with JS
  const cardDOM = document.getElementById("random-card");
  const symbolsDOM = document.getElementsByClassName("symbol");
  const cardNumberDOM = document.querySelector(".centralnumber");

  // Applying the color to the DOM
  if (newCard.suit == "♦" || newCard.suit == "♥")
    cardDOM.classList.replace("black-suit", "red-suit");
  else cardDOM.classList.replace("red-suit", "black-suit");

  // Applying the Card Number to the DOM
  cardNumberDOM.innerHTML = newCard.cardNumber;

  // Applying the Card Suit to the DOM
  for (const symbol of symbolsDOM) {
    symbol.innerHTML = newCard.suit.toString();
  }
}

function selectRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
