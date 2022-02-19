// Javascripts objects are always in key value pair

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
    sayHi: function(){
        console.log(`Hello My name is ${this.firstName}`);
    }
}
console.log(captainAmerica);

// Methods  ->  jo functions objects k andar bne ho unhe methods kehte h
// Jo bhi strings bnti h vo ek type se object h hoti h
