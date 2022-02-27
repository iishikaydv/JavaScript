var num = 5;
function cube(num){
    return num*num*num;
}
var cube1 = cube(num);
var cube2 = cube(10);
var cube3 = cube();  
console.log(cube1);
console.log(cube2);
console.log(cube3);  // Error : NaN (Not a Number, Non sensible calculation)
console.log(undefined * 5 * undefined);