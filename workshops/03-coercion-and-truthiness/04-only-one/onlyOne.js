function onlyOne (val1, val2, val3) {
    let count = 0;
    if (val1) count++
    if (val2) count++
    if (val3) count++
    return count === 1
}