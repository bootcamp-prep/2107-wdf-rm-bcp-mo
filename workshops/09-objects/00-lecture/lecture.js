// let _school = "Fullstack Academy";
// let city = "New York";

// // print the string, "Hello, Fullstack Academy is in New York" using the variables above

// // method 1 => string concatenation
// let str = "Hello, " + _school + " is in " + city;
// console.log(str);

// // method 2 => string interpolation
// let interpolatedStr = `Hello, ${_school} is in ${city}`;
// console.log(interpolatedStr);

// // given a grid, print out the middle column
// /*
//    [
//     [1,2,3,4,0], // 5/2 = 2.5 => 2
//     [3,4,2,1,0],
//     [6,4,5,2,3]
//    ]

//    [
//     [1,2,3,4], // 4/2 = 2
//     [3,4,2,1],
//     [6,4,5,2]
//    ]

//    output => [3,2,5]
// */

// function getMidColumn(grid) {
//     let midColumn = [];
//     for (let i = 0; i < grid.length; i++) {
//         const row = grid[i];
//         const midIdx = Math.floor(row.length / 2); // if ans is 1.2, return 1.
//         const num = row[midIdx];
//         midColumn.push(num);
//     }
//     return midColumn;
// }

// let grid1 = [
//     [1, 2, 3, 4, 0], // 5/2 = 2.5 => 2
//     [3, 4, 2, 1, 0],
//     [6, 4, 5, 2, 3]
// ];

// let grid2 = [
//     [1, 2, 3, 4], // 4/2 = 2
//     [3, 4, 2, 1],
//     [6, 4, 5, 2]
// ];

// console.log(getMidColumn(grid1));
// console.log(getMidColumn(grid2));

// //
// function getColumn(grid, colIdx) {
//     let column = [];
//     for (let i = 0; i < grid.length; i++) {
//         const row = grid[i];
//         console.log(row);
//         const num = row[colIdx];
//         console.log(num);
//         column.push(num);
//     }
//     return column;
// }

// console.log(getColumn(grid1, 0)); // colIdx = 0
// // console.log(getColumn(grid1, 1)); // colIdx = 1

// // const pusheen = {
// //     "first name": "pusheen"
// // }

// // // what I would do
// // const pusheen = {
// //     firstName: "pusheen"
// // }

// // Array is a special type of _schoolect

// // function getValue(keyName, _school) {
// //     console.log(keyName);
// //     return _school[keyName]; // same as _school["name"]
// // }

// function getValue(keyName, _school) {
//     console.log(keyName);
//     return _school.keyName; // same as _school["keyName"]
// }

let _school = {
    firstName: "fullstack",
    age: 100,
    scores: []
};

// // rename name => _school (workaround since you can't rename keys)
// const nameVal = _school.name;
// delete _school.name;
// _school._school = nameVal;
// _school.scores.push(10);
// _school.scores.push(20);
// console.log(_school);
// console.log(_school["firstName"]);

let student = {
    name: "tafari",
    school: [_school]
};

student.siblings = {
    brother: "topCat"
};
student.siblings.sister = "pusheen";

console.log(student);
