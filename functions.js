// 3 types of functions 

//how to make function
//function definition

/*function function_name(parameter1, parameter2){
    //do something
}

//function invoke -> name of variable is used to invoke the function
function_name(arg1, arg2);*/

//1st way
/*function add(a, b){
    return a + b;
}
let ans = add(2, 6);
console.log(ans);

//2nd way
function add(a, b){
    console.log(a + b);
}
add(2, 6);*/

// Function are treated as first class citizen in javascript
// -> Functions can be returned
// -> Functions can be passed as parameters/arguments

/*function calculator(str,a ,b){
    if (str == 'add') {
        return function add(){
            console.log(a + b);
        }
    }
    //else if (str == 'sub'){

    //}
}

let returnedFunc = calculator('add', 2, 3);  //whole function is returning
console.log("returned function is\n " + returnedFunc);
returnedFunc();*/


// 2) Function Expression

let sayHi = function abcd() {
    console.log("Hello guys i am function expression!!!");
}

sayHi();
console.log("" + sayHi);
//abcd(); // error abcd is not defined
