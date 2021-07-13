function mySlice(originalString, startIdx, endIdx) {
    if (endIdx <= startIdx) {
        console.log("Sorry this input is invalid");
        return;
    }

    if (startIdx === undefined) {
        startIdx = 0;
    }

    if (endIdx) {
        endIdx = originalString.length;
    }

    let slicedStr = "";
    for (let i = startIdx; i < endIdx; i++) {
        slicedStr += originalString[i];
    }
    return slicedStr;
}

// console.log(mySlice("abc", 1, 2));
// console.log(mySlice("abc", 0, 2));
console.log(mySlice("hello", 2, 3));
