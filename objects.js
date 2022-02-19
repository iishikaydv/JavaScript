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