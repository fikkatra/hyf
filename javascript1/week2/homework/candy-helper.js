const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram;
  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  }
  boughtCandyPrices.push(weight * pricePerGram);
}

function canBuyMoreCandy(amountToSpend) {
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }
  return totalPrice < amountToSpend;
}

// Execute the program: buy random candy until you can't buy more
const amountToSpend = Math.random() * 100;
console.log("You have " + amountToSpend + " to spend on candy");
const candyTypes = ["sweet", "chocolate", "toffee", "chewing-gum"];

let continueBuying = true;

while (continueBuying) {
  // Pick a random candy type
  const candyType = candyTypes[Math.floor(Math.random() * candyTypes.length)];
  // Pick a random amount of candy between 0 and 100 grams
  const weight = Math.random() * 100;
  console.log("Buying " + weight + " grams of " + candyType + " candy");
  addCandy(candyType, weight);

  continueBuying = canBuyMoreCandy(amountToSpend);
  if (continueBuying) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}
