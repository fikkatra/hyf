// Peter's data
const namePeter = "Peter";
const widthPeter = 8;
const depthPeter = 10;
const heightPeter = 10;
const gardenSizeInM2Peter = 100;
const paidPricePeter = 2500000;

// Julia's data
const nameJulia = "Julia";
const widthJulia = 5;
const depthJulia = 11;
const heightJulia = 8;
const gardenSizeInM2Julia = 70;
const paidPriceJulia = 1000000;

// General data to calculate the house price
let width;
let depth;
let height;
let gardenSizeInM2;
let paidPrice;

// Choose the person for which you want to calculate the house price
const personName = namePeter;

// Set the data for the person you chose
if (personName === namePeter) {
  width = widthPeter;
  depth = depthPeter;
  height = heightPeter;
  gardenSizeInM2 = gardenSizeInM2Peter;
  paidPrice = paidPricePeter;
} else if (personName === nameJulia) {
  width = widthJulia;
  depth = depthJulia;
  height = heightJulia;
  gardenSizeInM2 = gardenSizeInM2Julia;
  paidPrice = paidPriceJulia;
} else {
  console.log("Person not found");
}

// Calculate the volume of the house
const volumeInMeters = width * depth * height;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

// Figure out if they are paying too much
if (paidPrice > housePrice) {
  console.log(personName + ", you are paying too much!");
} else {
  console.log(personName + ", you have negotiated well, congratulations!");
}
