const global = "global";
function scopeTest() {
  // console.log(functionScope); // This will throw an error because functionScope is not defined yet, it is defined two lines below
  console.log(global);
  const functionScope = "functionScope";
  console.log(functionScope); // Solution: moved line 3 here to avoid the error

  function tester() {
    console.log(global);

    const testerVariable = "testerVariable";
    console.log(testerVariable); // Solution: moved line 16 here to avoid the error
  }

  tester();
  // console.log(testerVariable); // This will throw an error because testerVariable is defined in the scope of the tester function and is not accessible here
}

scopeTest();
// tester() // This will throw an error because tester is defined in the scope of the scopeTest function and is not accessible here
