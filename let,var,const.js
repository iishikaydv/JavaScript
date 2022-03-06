/*console.log(x);
var x = 10;
let b = 100;    // This has to be initialised first
console.log(b);*/ 

// Blocks  ->  Those statements which comes between these curly braces are termed as blocks.
// It is used to compound statements.
// {

// }

// if(10>0){
//     // Performs all statements under these curly brackets.
// }

// Block Scope  ->  Variables which are declared in a block are accessible inside that block, those variables are known to be block scoped.
// Variables declared using let and const are block scoped.
// var is function scoped

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
//console.log(b);
console.log(c);