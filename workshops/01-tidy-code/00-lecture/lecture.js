// code has to be properly indented. Usually you'll have configuration files that will automatically handle these for you (when you're working on a larger codebase), but not during interviews. So you'll have to indent code yourself during interviews, when working with codepen and repl (at least for now). Sooner you get comfortable with it the better

function amazingFunction() {
    let num = 1;
    if (true) {
        let num2 = 3;
    }
    return num;
}

/* VARIABLE NAMES  */

// one word - all lower case
let name = "Fullstack Academy";

// more than one word => camel case
let myFavoritePlace = "Fullstack Academy";

// no ambiguous names
let x = 35; // bad name
let currentTemp = 35; // good name (descriptive and specific)

// exception -> you can use i, j, k, etc in for loops
// counter/iteration variables => i, j, k
for (let i = 0; i < currentTemp; i++) {}

/* comments */
// don't use too many comments
// comments should explain why you made a decision
// comments should not explain what you're doing in code. Your code should be written so elegantly that it's obvious to another person what you're doing
// I'm writing too many comments in my files because I'm teaching lol. If I was problem solving only then I wouldn't (just incase you're confused)
