function lastFridayNight(transactions) {
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        const transactionObject = transactions[i];
        const amount = transactionObject.amount;
        total += amount;
    }
    return total;
}

function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        const value = obj1[key];
        if (obj2[key] === value) {
            continue;
        } else {
            return false;
        }
    }
    for (let key in obj2) {
        const value = obj2[key];
        if (obj1[key] === value) {
            continue;
        } else {
            return false;
        }
    }
}

function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length === keys2.length) {
        for (let key in obj1) {
            const value = obj1[key];
            if (obj2[key] === value) {
                continue;
            } else {
                return false;
            }
        }
        for (let key in obj2) {
            const value = obj2[key];
            if (obj1[key] === value) {
                continue;
            } else {
                return false;
            }
        }
    }
}

function leetTranslator(str) {
    str = str.toLowerCase();
    let leetCodex = {};
    for (let i = 0; i < letters.length; i++) {
        const alphabet = letters[i];
        leetCodex[alphabet] = leetChars[i];
    }
    let code = "";
    for (let i = 0; i < str.length; i++) {
        code += leetCodex[str[i]];
    }
    return code;
}