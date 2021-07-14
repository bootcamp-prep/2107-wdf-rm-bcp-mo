/* 
    1=> odd couple
    2-> myincludes
    3 -> mylastindexof
    4 => myReverse
    5 => unshift
*/

/*

odd couple
*/

function oddCouple(arr) {
    let oddNums = [];
    for (let i = 0; i < arr.length; i++) {
        if (oddNums.length === 2) {
            return oddNums;
        }
        let element = arr[i];
        if (element % 2 === 1) {
            oddNums.push(element);
        } else {
            continue;
        }
    }
    return oddNums;
}

/* 
myIncludes

*/

function myIncludes(arr, searchValue) {
    return arr.indexOf(searchValue) !== -1;
}

function myIncludes(arr, searchValue) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element === searchValue) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}

/* 
myLastIndexOf

*/

function myLastIndexOf(arr, searchValue, lastIndex = arr.length) {
    for (let i = lastIndex; i >= 0; i--) {
        let element = arr[i];
        if (element === searchValue) {
            return i;
        }
    }
    return -1;
}

/* 
myReverse
*/

function myReverse(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        reversed.push(element);
    }
    return reversed;
}

/* 
    myUnshift => 3 solutions
*/

function myUnshift(arr, newVal) {
    let newArr = [newVal];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function myUnshift(arr, newVal) {
    return [newVal].concat(arr);
}

// spread operator => copy an array, to add elements, replace elements. this case we are adding to the front
function myUnshift(arr, newVal) {
    return [newVal, ...arr];
}
