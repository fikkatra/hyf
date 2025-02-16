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

// Calculate the house price for both Peter and Julia
const volumeInMetersPeter = widthPeter * depthPeter * heightPeter;
const housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

const volumeInMetersJulia = widthJulia * depthJulia * heightJulia;
const housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

// Figure out if Peter is paying too much
if(paidPricePeter > housePricePeter) {
    console.log("Peter, you are paying too much!");
} else {
    console.log("Peter, you have negotiated well, congratulations!");
}

// Figure out if Julia is paying too much
if(paidPriceJulia > housePriceJulia) {
    console.log("Julia, you are paying too much!");
} else {
    console.log("Julia, you have negotiated well, congratulations!");
}
