const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const age = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

let ageToDisplay;
if (shouldShowResultInDogYears) {
    ageToDisplay = age * 7 + " dog years";
} else {
    ageToDisplay = age + " human years";
}

console.log("Your dog will be " + ageToDisplay + " old in " + dogYearFuture + ".");


