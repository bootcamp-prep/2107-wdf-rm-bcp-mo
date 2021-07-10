/* abc => ced
 * loop over the secret-
 * grab each character -
 * shift the character by shiftNum
 * get index of character in alphabets -
 * add 2 to the index -
 * find character at this new index -
 * if new index is greater than or equal to 26 then you wrap around
 * use mod to wrap around
 * add the new character to the result -
 * if character is not an alphabet -
 * append the character as is to the result -
 * return the result -
 */

// solution 1
function caesarCypher(secret, shift) {
    secret = secret.toLowerCase();
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";
    for (let i = 0; i < secret.length; i++) {
        let char = secret[i];
        if (alphabets.includes(char)) {
            let pos = alphabets.indexOf(char);
            let newPos = pos + shift;
            if (newPos >= 26) {
                newPos = newPos % 26;
            }
            let newChar = alphabets[newPos];
            encrypted += newChar;
        } else {
            encrypted += char;
        }
    }
    return encrypted;
}

// solution 2
function caesarCypher(secret, shift) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";
    for (let i = 0; i < secret.length; i++) {
        let char = secret[i];
        if (alphabets.includes(char)) {
            let pos = alphabets.indexOf(char);
            let newPos = pos + shift;
            if (newPos >= 26) {
                newPos = newPos - 26;
            }
            let newChar = alphabets[newPos];
            encrypted += newChar;
        } else {
            encrypted += char;
        }
    }
    return encrypted;
}
