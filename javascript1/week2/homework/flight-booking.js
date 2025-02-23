function getFullname(firstName, lastName, useFormalName, isWoman) {
  if (!firstName || !lastName) {
    console.error("Please enter a valid name");
    return;
  }
  const fullName = firstName + " " + lastName;
  if (useFormalName) {
    const title = isWoman ? "Lady" : "Lord";
    return title + " " + fullName;
  }
  return fullName;
}

const fullName1 = getFullname("Benjamin", "Hughes", true);
const fullName2 = getFullname("Isaac", "Newton");
const fullName3 = getFullname("Michelle", "Obama", true, true);
const fullNameEmpty = getFullname("", "");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullNameEmpty);
