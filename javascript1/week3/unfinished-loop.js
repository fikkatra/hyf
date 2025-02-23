// https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript

function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; ) {
    newArray.push(counter);
  }
  return newArray;
}
