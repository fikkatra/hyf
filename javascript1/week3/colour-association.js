// https://www.codewars.com/kata/colour-association/train/javascript

function colourAssociation(array) {
  const result = [];
  for (let item of array) {
    const key = item[0];
    const value = item[1];
    const obj = {
      [key]: value,
    };
    result.push(obj);
  }
  return result;
}

// Also valid, using for..in loop:
// function colourAssociation(array) {
//   const result = [];
//   for (let i in array) {
//     const item = array[i];
//     const key = item[0];
//     const value = item[1];
//     const obj = {
//       [key]: value,
//     };
//     result.push(obj);
//   }
//   return result;
// }

// Also valid, using for..in loop and without declaring the item variable
// function colourAssociation(array) {
//   const result = [];
//   for (let i in array) {
//     const key = array[i][0];
//     const value = array[i][1];
//     const obj = {
//       [key]: value,
//     };
//     result.push(obj);
//   }
//   return result;
// }
