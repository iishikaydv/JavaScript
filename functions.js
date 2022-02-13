// 3 types of functions 

//how to make function
//function definition

/*function function_name(parameter1, parameter2){
    //do something
}

//function invoke -> name of variable is used to invoke the function
function_name(arg1, arg2);*/

//1st way  ->  put function in variable and then print function through that variable
/*function add(a, b){
    return a + b;
}
let ans = add(2, 6);
console.log(ans);*/

//2nd way  ->  directly call it
/*function add(a, b){
    console.log(a + b);
}
add(2, 6);*/

// Function are treated as first class citizen in javascript
// -> Functions can be returned
// -> Functions can be passed as parameters/arguments

/*function calculator(str, a ,b){
    if (str == 'add') {
        return a + b;//function add(){
            //console.log(a + b);
        //}
    }
    else if (str == 'sub'){
        return function sub(){
            console.log(a - b);
        }
    }
    else if (str == 'mul'){
        return function mul(){
            console.log(a * b);
        }
    }
    else if (str == 'div'){
        return function div(){
            console.log(a / b);
        }
    }
}
//calculator(2,3)
console.log(calculator('add', 2,3));
console.log(calculator('sub', 2,3));
console.log(calculator('mul', 2,3));
console.log(calculator('div', 2,3));*/

/*let returnedFunc = calculator('add', 2, 3);  //whole function is returning
console.log("returned function is\n " + returnedFunc);
returnedFunc();*/




// 2) Function Expression

/*let sayHi = function abcd() {
    console.log("Hello guys i am function expression!!!");
}

sayHi();
console.log("" + sayHi);*/
//abcd(); // error abcd is not defined




// 3) IIFE -> Immediately invoked function expression
// jese h define kro vese h call ho jaye vps call na krna pde vo functions hote h IIFE

/*function add(a, b){
    return a + b;
}
add(2, 3)
let addIIFE = (function add(a, b){
    return a + b;
})(20, 30);  // function invoked 
console.log("" + addIIFE);*/





// Practice - Calculator
function add(a, b){
    console.log(a + b);
}
function sub(a, b){
    console.log(a - b);
}
function mul(a, b){
    console.log(a * b);
}
function div(a, b){
    console.log(a / b);
}
add(15, 3);
sub(15, 3);
mul(15, 3);
div(15, 3);
