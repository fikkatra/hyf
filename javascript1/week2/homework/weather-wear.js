function getClothesToWear(temperature) {
  if (temperature >= 25) {
    return "shorts and t-shirt";
  } else if (temperature >= 15) {
    return "long pants and a shirt";
  } else {
    return "jacket and pants";
  }
}

console.log(getClothesToWear(30));
console.log(getClothesToWear(20));
console.log(getClothesToWear(10));
console.log(getClothesToWear(-5));