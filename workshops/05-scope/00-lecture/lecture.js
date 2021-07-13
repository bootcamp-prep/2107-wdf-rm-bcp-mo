function outer() {
    let outerVar = "outer";
    function inner(outerVar) {
        let innerVar = "inner";
        console.log(outerVar, innerVar);
        if (true) {
            var sum = 0;
            function hello() {
                console.log(sum); // 0
            }
            hello();
        }
        console.log(sum); // 0
    }
    console.log(sum); // undefined/error
    inner("fullstack");
    return 1;
}

console.log(sum); // undefined/error

console.log(outer());
