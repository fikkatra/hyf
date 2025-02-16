const global = 'global';
function scopeTest() {
    const functionScope = 'functionScope';
    console.log(functionScope);
    console.log(global);

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable';
        console.log(testerVariable);
    }

    tester();
}

scopeTest();
tester();