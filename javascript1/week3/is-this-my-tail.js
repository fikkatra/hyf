// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  const sub = body.substr(body.length - tail.length);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// Also valid, much shorter:
// function correctTail(body, tail) {
//   const sub = body.substr(body.length - tail.length);
//   return sub === tail;
// }
