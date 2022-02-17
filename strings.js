// Strings are sequence of characters
var str = "How You Doin'???";
// H o w <space> Y o u <space> D o i  n  '  ?  ?  ?
// 0 1 2    3    4 5 6    7    8 9 10 11 12 13 14 15
console.log(str);

// printing a character
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[6]);
console.log(str[7]);
console.log(str[8]);
console.log(str[9]);
console.log(str[10]);
console.log(str[11]);
console.log(str[12]);
console.log(str[13]);
console.log(str[14]);
console.log(str[15]);

// String Length
console.log(str.length);

// Strings Methods

// 1) Extraction Method  -> 
// Slice Method
// Slice(start, end)  ->  Start index is included and end index is excluded

var slicedStr = str.slice(4, 9);  // 4th index se shuru hoga aur 8th index tk string print hogi
console.log(slicedStr);
console.log(str);   // Original source of information is not changed

var slicedStr = str.slice(4);   // Start se lekr pori end tk string print hogi
console.log(slicedStr);

var slicedStr = str.slice(2, -4);  // Start se lekr peeche k end times index chod do
console.log(slicedStr);
