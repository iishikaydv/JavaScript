//Question-1
/*let randomValue = {name:"Lydia"};
randomValue = 23;

if(!typeof randomValue === "strings") {
    console.log("It's not a string!!!");
} else {
    console.log("Yay It's a string!!!");
}*/

/*var a = 10;  // Assign Values
if(a == 11){  // Checks Values
    console.log("Ishika");
} else if(a === 11){  // Firstly Checks Typeof and then Checks Value
    console.log("Chiki");
}*/

//Question-2
/*const user = {
    email: "my@email.com",
    updateEmail: function (email2){
        this.email = email2;  
    },
};

user.updateEmail("new@email.com");
console.log(user.email);*/  // This will be updated email  

//Question-3
/*const fruit = ["Banana","Orange","Apple"];

fruit.slice(0, 1);  // Kha se kha tk element delete krna h (startIdx,num_of_elements_delete)
// Does not change original value of arrays
fruit.splice(0, 1);  // ye original arrays m change krega
fruit.unshift("Cherry");

console.log(fruit);*/

//Question-4
/*let count = 0;
const nums = [0, 1, 2, 3];
for(var i in nums){
    if (i) count = count + 1;
}

console.log(count);*/

//Question-5
const emojis = ["Christmas Tree","Santa Claus","Gifts","Star"];
// 1st Option
/*emojis.push("Reindeer")
console.log(emojis);*/  // No error
// 2nd Option
/*emojis.splice(0, 2);
console.log(emojis);*/  // No error
// 3rd Option
/*emojis = [...emojis, "Drinks"];  // ...emojis -> Add krega usme ye 
//lekin error dega kyunki const keyword se defined h usme 10 index se 11 nhi ho skte h
console.log(emojis);*/  // Error -> TypeError: Assignment to constant variable.
// 4th Option
/*emojis.length = 0;
console.log(emojis.length);*/  //No error

//Question-6
/*const add = function (x) {
    return x + x;
}

function myFunc(num = 2, value = add(num)) {
    console.log(num, value);
}

myFunc();
myFunc(3);*/

//Question-7
//which of the following will modify the person object?
const person = {
    name : "Lydia Hallie",
    address : {
        street : "100 Main St.",
    },
};

Object.freeze(person);  // Freezes object -> A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. 
// Shallow Freeze -> only freezes array at level one
//person.name = "Evan Bacon";
//delete person.address;
person.address.street = "101 Main St.";  // This will modify  ->  beacuse it will only freezes name and address (i.e. -> only one level freezes) street can be modified
//person.pet = {name : "Mara"};
console.log(person);

// Question-8
