/*
Function
Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?

Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.

Try call the function and check with google if the function returns the right value.
*/

function getCircleArea(radius) {
  return Math.PI * radius ** 2;
}

// These 2 lines:
const area = getCircleArea(5);
console.log(area);
// are equivalent to this line:
console.log(getCircleArea(5));

function celciusToFahreneit(celcius) {
  return celcius * 1.8 + 32;
}

console.log(celciusToFahreneit(18));
