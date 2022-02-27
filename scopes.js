function outer() {
    inner();
    function inner() {
        console.log(b);
    }
}
var b = 10;
outer();
console.log(b);

// Scope  -> Where can this variable/ Function be accessed in the code
//                        OR
// is variable/ function inside the scope of code/function
// Lexical environment = local memory + lexical environment of parent
// Scope chaining -> chain of lexical environment and the parent references
