function myIndexOf(source, searchValue, startIdx = 0) {
    // hello, ll, 0 => 2
    for (let i = startIdx; i < source.length; i++) {
        // i = 0
        const potentialResult = source.slice(i, i + searchValue.length); // hello.slice(0, 2); => he
        if (potentialResult === searchValue) {
            return i;
        }
    }
    return -1;
}

function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
    let slicedStr = "";
    for (let i = startIdx; i < endIdx; i++) {
        slicedStr += originalString[i];
    }
    return slicedStr;
}

function mySlice(originalString, startIdx, endIdx) {
    if (startIdx === undefined) {
        startIdx = 0;
    }

    if (endIdx === undefined) {
        endIdx = originalString.length;
    }

    let slicedStr = "";
    for (let i = startIdx; i < endIdx; i++) {
        slicedStr += originalString[i];
    }
    return slicedStr;
}

/*
  2 ^ 3 = 8
  2 * 2 * 2 = 8
  base (2), power (3)
*/

function exponentiate(base, power) {
    // 2, 3 => 8
    if (power === 0) return 1;
    let product = 1; // 8
    for (let i = power; i > 0; i--) {
        // i = 0 => exit
        product *= base; // 2 * 2 * 2 = 8
    }
    return product;
}

function exponentiate(base, power) {
    // 2, 3 => 8
    if (power === 0) return 1;
    let product = base;
    for (let i = 1; i < power; i++) {
        product *= base;
    }
    return product;
}
