// starting JS-> JavaScript
// var let const

// variable declaration
/*var a; // we dont have to mention what datatype it is

//variable initialization
a = 10;
console.log(a); //for printing console.log();
console.log(typeof a);

a = "hello";
console.log(a);

//typeof operator-> it tells what is the datatype of the particular variable
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);

a = null;
console.log(a);
console.log(typeof a);
console.log();

//numbervar 
num = 10;
console.log(num);
var float = 2.4;
console.log(float);

var t = true;
var f = false;
console.log(t, f);

//string-> in this we can use "", '', ``
// single quotes, double quotes and backticks
var str = 'a';
console.log(typeof str);
str = "Hello How You doin? \ni am fine , How about you?";
// backslash n("\n")
console.log(str);

var b = `hi hope you guys are 
able to grasp`;
console.log(b);

var num = 100;
console.log("Half of 100 is 50");

var num1 = 200;
console.log(`Half of ${num1} is ${num1/2}`);*/  // this is for backticks




//var has some problems
//1) Redeclaration is allowed
/*var r = "Hello";
console.log(r);

var r = 100;
console.log(r);

// Overcome krne k liye

// let keyword is used
let l = 100;
console.log(l);

//let l = 200;  //SyntaxError: Identifier 'l' has already been declared
//console.log(l);

l = 300;  //we can reinitialise it but can't redeclare it
console.log(l);*/

//loops in js
var num = 10;

/*for (var i = 0; i < num; i++){
    if(i % 2 == 0){
        console.log("num is even");
    }
}*/

//const keyword
/*const a = 2;
console.log(a);
// with this keyword we can't redeclare nor we can reinitilise
//const a = 5;  //SyntaxError: Identifier 'a' has already been declared
a = 4;  //TypeError: Assignment to constant variable.
console.log("Hello");*/



//2nd problem with var keyword
//var keyword is function scoped in case of function else itg is global scope
//let keyword is block scoped

/*for (var i = 0; i < num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("value of i is "+ i);*/

/*for (let i = 0; i < num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("value of i is "+ i);*/  // to solve this problem below

/*let i;
for (i = 0; i < num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("value of i is "+ i);*/

// let global and blocked scope
let j = 10;
for (i = 0; i < num; i++){
    let j = 200;
    if(i % 2 == 0){
        console.log(i);
    }
    console.log("inner scope "+ j)
}
console.log("outer scope "+ j);


