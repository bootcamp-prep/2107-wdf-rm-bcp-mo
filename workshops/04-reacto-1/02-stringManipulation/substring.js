/* 
    4 solutions => all doing the same thing with more or less code

    not relevant to arrays (revisiting from reacto week 1)
*/

function isSubstring(str, substring) {
    return str.includes(substring);
}

function isSubstring(str, substring) {
    for (let i = 0; i < str.length; i++) {
        let potentialSubstring = str.slice(i, i + substring.length);
        if (potentialSubstring === substring) {
            return true;
        }
    }
    return false;
}

function isSubstring(str, substring) {
    return str.indexOf(substring) !== -1;
}

// Thanks to `Greg Solomon` for the solution below:
function isSubstring(str, substring) {
    for (let i = 0; i < str.length; i++) {
        let currentSubstring = "";
        for (let j = i; j < i + substring.length; j++) {
            currentSubstring += str[j];
        }
        if (currentSubstring === substring) return true;
    }
    return false;
}

console.log(isSubstring("abcdef", "bcd")); // true
console.log(isSubstring("abcdef", "p")); // false
