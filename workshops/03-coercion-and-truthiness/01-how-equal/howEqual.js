function howEqual(val1, val2) {
    if (val1 === val2) {
        return "strictly"
    }
    if (val1 == val2) {
        return "loosely"
    } 
    if (val1 != val2) { 
        return "not equal" 
    }
}