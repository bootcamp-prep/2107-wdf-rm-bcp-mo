// each following curly brace has to be indented one more tab than the previous
function styleMePretty() {
    let truth = ""; // press tab once
    function innerBeauty(count) {
        let result = "";
        while (count > 0) {
            count--; // count -= 1 or count = count - 1 (subtracting one from count)
            if (count === 2) {
                result += "Unformatted code";
            }
        }
        result += " is difficult to parse";
        return result;
    }
    truth += innerBeauty(5);
    truth += " for humans if not for machines";
    return truth;
}
