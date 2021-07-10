function myOr(arg1, arg2, arg3) {
    // returns the first truthy value or last value if all are falsey
    //
    if (arg1) {
        return arg1;
    }

    if (arg2) {
        return arg2;
    }

    if (arg3) {
        return arg3;
    }

    return arg3;
}

function myAnd(arg1, arg2, arg3) {
    // returns the first falsey value or last value if all are truthy
    if (!arg1) {
        return arg1;
    }

    if (!arg2) {
        return arg2;
    }

    if (!arg3) {
        return arg3;
    }

    return arg3;
}

// NaN not included but falsey
function isTruthy(arg) {
    if (arg) {
        return true;
    } else {
        if (arg === false) {
            return "The boolean value false is falsey";
        } else if (arg === null) {
            return "The null value is falsey";
        } else if (arg === undefined) {
            return "undefined is falsey";
        } else if (arg === 0) {
            return "The number 0 is falsey (the only falsey number)";
        } else if (arg === "") {
            return "The empty string is falsey (the only falsey string)";
        }
    }
}

// function isTruthy (arg) {
//   if (!!arg) {
//     return true;
//   } else {
//     if (arg === false) {
//       return 'The boolean value false is falsey'
//     } else if (arg === null) {
//       return 'The null value is falsey'
//     } else if (arg === undefined) {
//       return 'undefined is falsey'
//     } else if (arg === 0) {
//       return 'The number 0 is falsey (the only falsey number)'
//     } else if (arg === "") {
//       return 'The empty string is falsey (the only falsey string)'
//     }
//   }
// }

// function isTruthy (arg) {
//   if (Boolean(arg)) {
//     return true;
//   } else {
//     if (arg === false) {
//       return 'The boolean value false is falsey'
//     } else if (arg === null) {
//       return 'The null value is falsey'
//     } else if (arg === undefined) {
//       return 'undefined is falsey'
//     } else if (arg === 0) {
//       return 'The number 0 is falsey (the only falsey number)'
//     } else if (arg === "") {
//       return 'The empty string is falsey (the only falsey string)'
//     }
//   }
// }
