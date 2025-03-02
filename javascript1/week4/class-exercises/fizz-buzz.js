// fizz buzz
function fizzBuzz(number1, number2) {
  for (let i = 1; i <= 100; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
      console.log("FizzBuzz");
    } else if (i % number1 === 0) {
      console.log("Fizz");
    } else if (i % number2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5);
