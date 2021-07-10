/*
 * Primitive data types
 */

// number => 0 is falsey
// String => "" is falsey
// boolean => false is falsey
// undefined => is always falsey

/*
 * complex data types
 */

/*
 * Objects
 */
// arrays => [] is truthy
// objects => {} is truthy
// null => is always falsey
// functions => always truthy

console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof null);
console.log(!!-1);
console.log(!!NaN === !!NaN);
console.log(!!NaN === !!0);

// primitive types (WEIRD BEHAVIOR something you'll just have to remember)
console.log(false == "false");
console.log(true == "true");
console.log(0 == "0");
console.log(10 + "20");
console.log(NaN === NaN);

let num1 = 0;

// convert to string
// methods
console.log(String(num1));
console.log(num1 + "");
console.log(num1.toString());

let str = "0";
let str1 = "h";
// convert to number
console.log(Number(str));
console.log(+str);
console.log(+str1);
console.log(Number(str1));

console.log(2 && 3);
console.log(2 || 0);
