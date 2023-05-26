/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Defining the DOM elements with JS
  const randomCard = document.getElementById("random-card");
  const symbolsDOM = document.getElementsByClassName("symbol");
  const cardNumberDOM = document.querySelector(".centralnumber");
  const newButtonCard = document.getElementById("btn-new-card");
  const heightInput = document.getElementById("height");
  const widthInput = document.getElementById("width");

  applyCardToDom(randomCard, symbolsDOM, cardNumberDOM);

  heightInput.addEventListener("change", e => {
    setHeight(e.target.value, randomCard);
  });

  widthInput.addEventListener("change", e => {
    setWidth(e.target.value, randomCard);
  });

  // Generate a new card  5s to 5s
  let intervalCardGenerator = setInterval(
    () => applyCardToDom(randomCard, symbolsDOM, cardNumberDOM),
    2000
  );

  newButtonCard.addEventListener("click", () => {
    intervalCardGenerator = setNewIntervalOnClick(
      intervalCardGenerator,
      randomCard,
      symbolsDOM,
      cardNumberDOM
    );
  });
};

const setNewIntervalOnClick = (
  intervalCardGenerator,
  randomCard,
  symbolsDOM,
  cardNumberDOM
) => {
  clearInterval(intervalCardGenerator); // Clear previous interval
  const newIntervalCardGenerator = setInterval(
    () => applyCardToDom(randomCard, symbolsDOM, cardNumberDOM),
    2000
  );
  applyCardToDom(randomCard, symbolsDOM, cardNumberDOM);
  return newIntervalCardGenerator;
};

const setHeight = (height, card) => {
  card.style.height = height + "px";
};

const setWidth = (width, card) => {
  card.style.width = width + "px";
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

function applyCardToDom(randomCard, symbolsDOM, cardNumberDOM) {
  // Generate a new card
  const newCard = generateRandomCard();

  // Applying the color to the DOM
  if (newCard.suit == "♦" || newCard.suit == "♥")
    randomCard.classList.replace("black-suit", "red-suit");
  else randomCard.classList.replace("red-suit", "black-suit");

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
