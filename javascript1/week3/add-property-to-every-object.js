// https://www.codewars.com/kata/add-property-to-every-object-in-array/train/javascript

for (let question of questions) {
  question.usersAnswer = null;
}

// Also valid solutions:
// for(let i in questions){
//   questions[i].usersAnswer = null;
// }

// for(let i = 0; i < questions.length; i++){
//   questions[i].usersAnswer = null;
// }
