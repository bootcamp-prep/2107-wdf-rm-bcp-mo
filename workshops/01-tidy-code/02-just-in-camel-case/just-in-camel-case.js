// TYPE CODE BELOW
function justInCamelCase(underName) {
    let camelCaseOutput = "";
    let foundUnder = false;
    for (let i = 0; i < underName.length; i++) {
        if (underName[i] === "_") {
            foundUnder = true;
        } else {
            if (foundUnder) {
                camelCaseOutput += underName[i].toUpperCase();
                foundUnder = false;
            } else {
                camelCaseOutput += underName[i];
            }
        }
    }
    return camelCaseOutput;
}
