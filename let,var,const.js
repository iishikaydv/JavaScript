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

let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log(a);
// //console.log(b);
// console.log(c);
console.log(b);  // Shadowing  ->  When a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 along with block scoping allows variable shadowing.