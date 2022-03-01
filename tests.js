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
emojis.push("Reindeer")
console.log(emojis);  // No error