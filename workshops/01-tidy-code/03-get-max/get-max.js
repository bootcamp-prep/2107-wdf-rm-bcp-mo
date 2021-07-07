/* 

first 2 SOLUTIONS (getMax) - doing the same thing just differently

*/

// long hand
function getMax(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
        return num3;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// shorthand using built in "Math object" in JS. Just to introduce you to it if you're interested. Not required for Interviews
// max is said to be a method specific to Math object (you'll learn more about what methods are in the bootcamp)
function getMax(num1, num2, num3) {
    // 2,3,4
    return Math.max(num1, num2, num3); // 4
}

/* 
Contrast of Math.max => Math.min to find the minimum number
*/

function getMin(num1, num2, num3) {
    // 4, 3, 2
    return Math.min(num1, num2, num3); // 2
}
