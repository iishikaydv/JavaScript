// Javascripts objects are always in key value pair
// Methods  ->  jo functions objects k andar bne ho unhe methods kehte h
// Jo bhi strings bnti h vo ek type se object h hoti h

let obj = {};    // Empty objects
console.log(obj);

let person = {
    // Key : Value
    name:"Ishika",
    age:20,
    phone:9826939101,
    gender:"Female",
    height:"5'4",
}
console.log(person);
console.log(person.name);
console.log(`Hey ${person.name} Thank you for signing in!!!`);

var str = "Hello";
console.log(str.length);    // dot(.) notation to access properties
console.log(str["length"]);    // square bracket([]) notation to access properties

// Nesting of Objects
let captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends:["Bucky","Tony Stark","Bruce Banner"],
    age:102,
    isAvenger: true,
    address: {
        state:"Manhattan",
        city:"New York",
        country:"USA",
    },
    sayHi: function() {
        console.log(`Hello My name is ${this.firstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.friends[1]);
console.log(captainAmerica.friends[2]);
captainAmerica.sayHi(); // Method Accesing

// Array is also object
let arr = {
    0: "a",
    1: "b",
    2: 1,
    3: true
}
console.log(arr);

// For loop in objects  ->  in keyword in JS is used to get keys from that object
for(let Key in captainAmerica) {
    console.log(Key);    // rpints key
    // Key variable k andar meri key ki value padi hui h
    console.log(captainAmerica[Key]);    // prints value  ->  using bracket notation
}