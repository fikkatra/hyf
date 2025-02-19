const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You can't add an empty string to a class");
  } else if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

// Test the code
addStudentToClass("Benjamin");
console.log(getNumberOfStudents());
addStudentToClass("Isaac");
console.log(getNumberOfStudents());
addStudentToClass("Benjamin"); // Already in the class
console.log(getNumberOfStudents());
addStudentToClass("Michelle");
console.log(getNumberOfStudents());
addStudentToClass(""); // Empty string
console.log(getNumberOfStudents());
addStudentToClass("John");
console.log(getNumberOfStudents());
addStudentToClass("Anna");
console.log(getNumberOfStudents());
addStudentToClass("James");
console.log(getNumberOfStudents());
addStudentToClass("Natasha"); // Cannot add more students
console.log(getNumberOfStudents());
addStudentToClass("Queen"); // Always add Queen
console.log(getNumberOfStudents());
addStudentToClass("Queen"); // Already in the class
console.log(getNumberOfStudents());