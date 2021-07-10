// REACTO

/* notes from verbal prompt
 */

// given numbers find average

/* restate (verbally)  */

/* examples => test cases
 */
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([])); // 0
/* 
 4 + 3 + 2 + 1 = 10 / 4 = 5/2 => 2.5
*/

/* approach,problem solving, pseudocoding */
// 1. how would you solve this on a piece of paper witout thunking about the computer
// 2. write it down
// 3. teach the computer how to implement this solution (write down the approach)
/*
 * loop over the array
 * grab each number
 * calculate sum
 * divide the sum by array length
 * return result || 0
 */

/* code */
function findAverage(arr) {
    // []
    let sum = 0; // 0
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;
    }
    let avg = sum / arr.length; // undefined
    return avg || 0; // 0
}

/* Test */
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([])); // 0

/* optimize => only if you have time (not important) */
function findAverage(arr) {
    // []
    let sum = arr.reduce((num, sum) => sum + num, 0);
    let avg = sum / arr.length; // undefined
    return avg || 0; // 0
}

/* Test */
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([])); // 0
