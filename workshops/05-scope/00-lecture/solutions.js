/* 
1 => Fullstack HQ
2 => incrementalChange
3 => sumThingsWrong
4 -> SniperScope
5 => Scope Koans
*/

/* 1 */
let place = "Planet Earth";

function fullstackHQ() {
    return middleFunction("United States");

    function middleFunction(country) {
        return innerFunction("New York State");

        function innerFunction(state) {
            let city = "New York City";
            return innermostFunction();

            function innermostFunction() {
                return (
                    "Fullstack HQ is at " +
                    place +
                    ", " +
                    country +
                    ", " +
                    state +
                    ", " +
                    city
                );
            }
        }
    }
}

/* 2 */
let counter = 0;

// YOUR CODE BELOW
function incrementalChange(num) {
    counter += num;
    return counter;
}

/* 3 */
let sum = 0;

// solution 1
function sumThingsWrong(num1, num2) {
    return num1 + num2;
}
// solution 2
function sumThingsWrong(num1, num2) {
    let sum = 0;
    sum += num1;
    sum += num2;
    return sum;
}
// solution 3
function sumThingsWrong(num1, num2) {
    let innerSum = 0;
    innerSum += num1;
    innerSum += num2;
    return innerSum;
}

/* 4 */
let bond = "007";

function oddJob() {
    let AgentinScope = bond === "007"; // is 007 === 007?
    let prediction = true; // YOUR BOOLEAN PREDICTION HERE

    return AgentinScope === prediction;
}

function goldFinger(bond) {
    // bond = undefined
    let AgentinScope = bond === "007"; // is undefined === 007?
    let prediction = false; // YOUR BOOLEAN PREDICTION HERE

    return AgentinScope === prediction;
}

function scaramanga(target) {
    target = bond;

    let AgentinScope = bond === "007"; // is 007 === 007?
    let prediction = true; // YOUR BOOLEAN PREDICTION HERE

    return AgentinScope === prediction;
}

function drNo() {
    let bond = "Body Double";

    let AgentinScope = bond === "007"; // is body double === 007?
    let prediction = false; // YOUR BOOLEAN PREDICTION HERE

    return AgentinScope === prediction;
}

function jaws(agent) {
    agent = bond; // 007
    bond = "Body Double"; // glob variable changed

    let AgentinScope = agent === "007";
    let prediction = true; // YOUR BOOLEAN PREDICTION HERE

    return AgentinScope === prediction;
}

function elChiffre() {
    let agent = bond; // body double
    bond = "Body Double";

    let AgentinScope = agent === "007";
    let prediction = false; // YOUR BOOLEAN PREDICTION HERE

    return AgentinScope === prediction;
}

/* 5 */

// Test One Restrictions: Do not declare any new variable with the let or var keyword
let testOneMessage = "test failing";

function testOne(param) {
    // param = "test succeeding"
    testOneMessage = param;
    return testOneMessage;
}

// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = "test failing";

function testTwo() {
    helperFunc();
    return testTwoMessage;
}

function helperFunc(a) {
    testTwoMessage = "test succeeding";
    return a;
}

// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = "test failing";

function testThree(testThreeMessage) {
    // testThreeMessage = true
    if (testThreeMessage) {
        testThreeMessage = "test succeeding"; // changing local param not global
    }

    let msg = getMessage(1); // pass in any truthy value, does not have to be 1
    return msg;

    function getMessage(value) {
        if (value) {
            return testThreeMessage;
        }

        return "test failing";
    }
}

// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = "test succeeding";

function testFour(msg) {
    // 'test failing'
    function innerFunc(msg) {
        // test succeeding
        msg = msg; // param equal to itself. not helpful. ignore it

        function doubleInner(ms) {
            // can delete any 1 character we want from msg
            testFourMessage = msg;
            return testFourMessage;
        }

        testFourMessage = doubleInner("test failing");
    }

    innerFunc(testFourMessage); // innerFunc("test succeeding")

    msg = testFourMessage;
    return testFourMessage;
}
