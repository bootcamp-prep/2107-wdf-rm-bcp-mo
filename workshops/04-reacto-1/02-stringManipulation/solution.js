// Given a string and a substring...see if substring can be found in the string. if yes, return true else return false

//approach
/*
 * use includes method to check if substring exists in the str provided
 */

// first solution
function substringExists(str, substring) {
    let len = substring.length;
    for (let i = 0; i < str.length; i++) {
        let potSubstring = str.slice(i, i + len);
        if (potSubstring === substring) {
            return true;
        }
    }
    return false;
}

// optimized solution
function substringExists(str, substring) {
    return str.includes(substring);
}

console.log(substringExists("abcdefgh", "bcde"));
console.log(substringExists("abcd", "a"));
console.log(substringExists("abcde", "BCD"));
console.log(substringExists("", "bchsbsj"));
console.log(substringExists("kndakjdan", "kndakjdankndakjdan"));
