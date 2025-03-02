const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Solution 1
const indexOfNameToRemove = -1;
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    indexOfNameToRemove = i;
    break;
  }
}

if (indexOfNameToRemove !== -1) {
  names.splice(indexOfNameToRemove, 1);
}

// Alternative solution 1, using indexOf
// const indexOfNameToRemove = names.indexOf(nameToRemove);
// if (indexOfNameToRemove !== -1) {
//   names.splice(indexOfNameToRemove, 1);
// }

// Alternative solution 2, creating a new array
// const newNames = [];
// for (let name of names) {
//   if (name !== nameToRemove) {
//     newNames.push(name);
//   }
// }
// names = newNames;

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
