// https://www.codewars.com/kata/squash-the-bugs/train/javascript

function findLongest(str) {
  const spl = str.split(" ");
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}

// Also valid, using for..of loop:
// function findLongest(str) {
//   const spl = str.split(" ");
//   let longest = 0;

//   for (let word of spl) {
//     if (word.length > longest) {
//       longest = word.length;
//     }
//   }
//   return longest;
// }
