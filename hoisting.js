/*var x = 10;
function greet() {
    console.log("Hello Guys!!!");
}

console.log(x);
greet();*/ 
// 10 Hello Guy s!!!

/*console.log(x);
greet();
var x = 10;
function greet() {
    console.log("Hello Guys!!!");
}*/


//Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.

// We can access variables and functions even before we have declare it is known as hoisting.

console.log(hello);  //undefined
//hello(); // Gives error coz hello is a function expression 
var hello = function(){
    console.log("You Guys are Doing Great!!!");
}
hello();