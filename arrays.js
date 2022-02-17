// Arrays is a collection of elements.
// in JS we can store different DataTypes in a single array
let cars = ['BME','Audi','MG',1,2.6,3,4,true];
console.log(cars);

// Accessing the elements of array
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[4]);
console.log(cars[7]);

// Replacing elements in array
cars[3] = "Mahindra";
console.log(cars[3]);

// Adding elements in an array
cars[7] = "Honda";
console.log(cars);

// Methods of an array

// 1)pop methods -> This method removes the element from the last of array
cars.pop();
console.log("After popping the element:\n" + cars);

// 2) push method -> It pushes a new element at the end of array
cars.push("TATA");
console.log("After Pushing an element:\n"+ cars);

// 3) unshift method -> this adds element at the starting of array
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// 4) shift method -> It removes element from 0th index of array
cars.shift();
cars.shift();
console.log(cars);

// Length
console.log(cars.length);

//2d array  ->  Arrays which consists of arrays [ Arrays of Arrays ] 
["a","b","c"] // Array of strings
[1,2,3]  // Array of numbers
let Array2d = [
    ["BMW", 2, null,45],
    [4, true, 6],
    [7, 8, "AUDI"],
    [10,"Chiki",12]
]  // Array of Array
// ["a","b","c"] // Array of strings
// [1,2,3]  // Array of numbers
console.log(Array2d);  // Prints 2d array
console.table(Array2d);  // Prints 2d array in the form of a table
console.log(Array2d[3][1]);
console.log(Array2d[1][3]);  //undefined


let res = Array2d[1];
console.log("Printing of res array: ");
console.log(res);
console.log("Res of 2nd Index: ");
console.log(res[2]);
