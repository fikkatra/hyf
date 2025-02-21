const class07Students = [];

function addStudentToClass(studentName) {
    console.log("Trying to add student " + studentName + " to the class...");
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
  } else if (!studentName) {
    console.log("You can't add an empty string to a class");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else {
    class07Students.push(studentName);
    console.log("Student " + studentName + " was added to the class");
  }
  console.log("The class has " + class07Students.length + " students");
}

function getNumberOfStudents() {
  return class07Students.length;
}

// Test the code
addStudentToClass("Benjamin");
addStudentToClass("Isaac");
addStudentToClass("Benjamin"); // Already in the class
addStudentToClass("Michelle");
addStudentToClass("John");
addStudentToClass(""); // Empty string
addStudentToClass("Anna");
addStudentToClass("James");
addStudentToClass("Natasha"); // Cannot add more students
addStudentToClass("Queen"); // Always add Queen
addStudentToClass("Queen"); // Already in the class
