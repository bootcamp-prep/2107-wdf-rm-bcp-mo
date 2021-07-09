function zeroDarkThirty(num) {
    if (num === 0) return NaN;
    
    let noZeros = ""
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0") {
        noZeros = noZeros + str[i];
        }
    }
    return Number(noZeros);
}