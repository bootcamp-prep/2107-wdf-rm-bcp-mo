/* 
    what can arrays hold? any data type including themselves
    let avar = "random"
    eg. ["hello", 1, true, avar, ["2", 2, 3], {key:value}, null, undefined, function(){}]

    lingo
    values inside strings => characters
    values inside arrays => elements 
    key:value inside objects => properties/key:value pairs/pair

    "typeof" variable tells you what type of value you are dealing with

    typeof => object, string, number, function

    typeof [] => object
    typeof {} => object
    typeof null => object

    "Array.isArray(variable)" instead of typeof to check if variable is an array
    let aString = "hello";
    let anArr = ["hello", "hi"];

    Array.isArray(aString); // false
    Array.isArray(anArr); // true

    use "variable === null" if a value is null // true if yes, false is no 

*/

let var1 = ["1", "2", "3"];
let var2 = '[1, 2, 3]';
let var3 = 8;
let var4 = null;
let var5 = undefined;

// typeof var1; // object
// Array.isArray(var1); // true 
// typeof var2; // string
// Array.isArray(var2); // false
// typeof var3; // number
// Array.isArray(var3); // false
// if (var4 === null) // to check if value is null
// Array.isArray(var4); // false
// if (var5 === undefined) // to check if value is undefined
// Array.isArray(var5); // false


/* 
    let str1 = "hello";
    let char1 = str1[0]; // "h"

    // bracket access
    let arr1 = ["1", "2", "3"]
    let element1 = arr1[0]; // "1"

    // bracket assignment
    let arr2 = [4,3,1,2];
    arr2[1] = "hello"; // [4, "hello", 1, 2];

    let aStr = "hello";
    aStr[1] = 5; 
    console.log(aStr); // "hello" 

    primitive data types are immutable => numbers, strings, booleans
    complex data types are mutable

    let aStr1 = "helloo";
    let aNum = 2;
    aStr1 = aNum.toString(); // copies, perform action (converts), assigns
    aStr1 += "p";// aStr1 = aStr1 + "p" => // copy, add, reassign
    console.log(aStr1); // helloop


    // arr.pop(); => pop() takes no parameters. 
    let arr1 = [1,3,4];
    arr1.pop(); // arr1 => [1,3], 4 is forgotten
    let removed = arr1.pop(); // removed => 3, arr1 => [1]

*/

let arr1 = [1, 2, 4];
arr1.pop();
console.log(arr1); // [1,2]
console.log(arr1.pop()); // 2
let removed = arr1.pop();
console.log(removed); // 1
console.log(arr1); // []
arr1.pop() // undefined or might throw an error because arr1 was empty


// arr.splice(..) is used add, delete, replace, from the middle of the array => you'll learn about it in arrays2

let arr3 = [1, 2, 3];
arr3.push(5);
arr1.unshift(10); // [10, 1, 2, 3, 5]

/* 
let arr = [2,4,3,1];
arr.slice() is used to shallow copy an array or return a fraction or piece of the array
arr.slice(startIdx, endIdx); startIdx (inclusive), endIdx (exclusive)
arr.slice(2); // [3,1]
arr.slice(1, 3); // [4,3]
arr.slice(); // [2,3,4,1] which is a copy of arr
arr.slice(3); // start at index 3 return 1 element [1]

*/

/* primitive vs complex data types 
    [1, 2, 3] === [1, 2, 3] // false
    0 === 0 // true
    let arr1 = [2,3,4];
    let arr21 = [2,3,4];
    let arr3 = arr1;
    let arr2 = [4,5,6];
    arr1 === arr2; // false
    arr1 === arr21; // false (arrays are accessed and passed by reference)
    arr1 === arr3; // true // arr1 is holding a reference to arr3 so ans is true
    JSON.stringify(arr1) === JSON.stringify(arr21); // true (optional to learn)
*/