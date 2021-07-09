// Questions and answers from Exit Tix

//How to go from prompt -> developing & implementing solution?
    // live demo

//When to use FOR loops vs WHILE loops?
    // if you can solve it with a loop, you can solve it with EITHER. 



/**
 * Coercion:
 * 
 * datatypes -> number, string, boolean, object, function, undefined, null 
 * 
 * changing a value of one datatype to a different datatype
 * 
 * 
 * when comparing a boolean and a number, boolean ALWAYS gets implicitly converted to a number
 * when comparing a string and a number, number ALWAYS gets string converted to a number
 * + other rules that are arbitrary
 * 
 * console.log(!!['an', 'array']); 
 * // ! does 2 things:
 * // 1) ['an', 'array'] -> is this truthy or falsey? 
 * // 2) THEN taking the opposite (of its boolean value)
 * // 
 * // !['an', 'array'] ->  evaluates to false
 * // by adding another !, we then take the opposite
 * // 
 * // !! -> the same as doing explicit coercion Boolean(['an', 'array'])
 * 
 * 
 * // if (arg) -> what we're writing
 * // if (Boolean(arg)) -> what JS is doing
 */