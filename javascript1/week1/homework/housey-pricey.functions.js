
function calculateVolume(width, depth, height) {
    return width * depth * height;
}

function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

function isPayingTooMuch(width, depth, height, gardenSizeInM2, paidPrice) {
    const volumeInMeters = calculateVolume(width, depth, height);
    // const volumeInMeters = width * depth * height;
    const housePrice = calculateHousePrice(volumeInMeters, gardenSizeInM2);

    return paidPrice > housePrice;
}

function printIfPayingTooMuch(personName, width, depth, height, gardenSizeInM2, paidPrice) {
    const isTooMuch = isPayingTooMuch(width, depth, height, gardenSizeInM2, paidPrice);
    const  message = isTooMuch ? "you are paying too much!" : "you have negotiated well, congratulations!";
    console.log(personName + ", " + message);
}

const firstName = inputName.value;

printIfPayingTooMuch(firstName, 8, 10, 10, 100, 2500000);
printIfPayingTooMuch("Julia", 5, 11, 8, 70, 1000000);

