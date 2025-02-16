const firstWords = ["Easy", "Awesome", "Super", "Innovative", "Creative", "Dynamic", "Fantastic", "Incredible", "Modern", "Smart"];
const secondWords = ["Company", "Business", "Solutions", "Services", "Corporation", "Innovations", "Creative", "Dynamics", "Solutions", "Technologies"];

const randomNumber1 = Math.floor(Math.random() * 10);
// even better: const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * 10);
// even better: const randomNumber2 = Math.floor(Math.random() * secondWords.length);

const firstWord = firstWords[randomNumber1]; // The index can be a variable, as long as it is a number between 0 and 9 (firstWords.length - 1)!
const secondWord = secondWords[randomNumber2];

const startupName = firstWord + " " + secondWord;

console.log("The startup: " + startupName + " contains " + startupName.length + " characters");