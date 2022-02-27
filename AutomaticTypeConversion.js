var ans = "5" + 1;  // "5" + "1" -> 51  Precedence of String is more than Integer
// var ans = "Chiki" + 1; // "Chiki" + "1" -> Chiki1 (1 is converted into String type)
console.log(ans);

var ans = 1 + "5";  //"1" + "5" -> 15  // + sign stands for addition and concatenation
console.log(ans);  // bod>m>a>s  ->  brackets open division multiplication addition substraction

console.log(null * 5);  // output: 0 (Null is converted into 0)  //Default of javascript's design  ->  Null and Undefined are almost same
console.log(null * "5");

console.log(undefined * 5);  //Output: NaN

console.log("5" - 1);  // Output: 4  // converts strings into integers 

console.log("ten" * 3);   //Nan ("ten" string cannot be mapped into a number like "5" can be mapped to a number)

console.log("10" * 3);