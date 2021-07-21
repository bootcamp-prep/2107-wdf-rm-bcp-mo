function countToTen(num) {
    if (num === 10) {
        console.log(num);
        return;
    } else {
        console.log(num);
        num++;
        return countToTen(num);
    }
}

// angel's solution
function countToTen(num) {
    if (num === 10) {
        console.log(num);
        return;
    } else {
        console.log(num);
        return countToTen(num + 1);
    }
}

function backwardString(str) {
    if (str === "") {
        return;
    } else {
        const lastChar = str[str.length - 1];
        const rest = str.slice(0, str.length - 1);
        console.log(lastChar);
        return backwardString(rest);
    }
}

function sumNums(num) {
    if (num === 1) {
        return num;
    } else {
        return num + sumNums(num - 1);
    }
}

function countVowels(str) {
    // ""
    str = str.toLowerCase(); // ""
    if (str === "") {
        return 0;
    } else {
        const firstChar = str[0]; // c
        const isVowel = getStatus(firstChar); // false
        const strAfterRemovedFirstChar = str.slice(1);
        if (isVowel) {
            return 1 + countVowels(strAfterRemovedFirstChar); // 1 + 0 + 0 + 0 = 1
        } else {
            return 0 + countVowels(strAfterRemovedFirstChar);
        }
    }
}

function getStatus(char) {
    const vowels = "aeiou";
    if (vowels.includes(char)) {
        return true;
    } else {
        return false;
    }
}

function reverseArray(arr) {
    if (!arr.length) {
        return arr;
    } else {
        const lastElement = arr[arr.length - 1];
        const everythingExceptLastElement = arr.slice(0, arr.length - 1); // 0th index => secondLast indx
        return [lastElement].concat(reverseArray(everythingExceptLastElement));
    }
}

function sumDigits(num) {
    num = num.toString();
    if (num.length === 1) {
        return +num[0]; // same as Number(num[0])
    } else {
        const firstDigit = num[0];
        const numAfterFirstRemoved = num.slice(1);
        return Number(firstDigit) + sumDigits(numAfterFirstRemoved);
    }
}

function isPalindrome(str) {
    str = str.toLowerCase();
    if (str.length === 1) {
        return true;
    } else if (str.length === 2) {
        const firstChar = str[0];
        const secondChar = str[1];
        return firstChar === secondChar;
    } else {
        const firstChar = str[0];
        const lastChar = str[str.length - 1];
        if (firstChar === lastChar) {
            const strAfterFirstAndLastRemoved = str.slice(1, str.length - 1);
            return isPalindrome(strAfterFirstAndLastRemoved);
        } else {
            return false;
        }
    }
}
