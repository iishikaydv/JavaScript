var obj = {
    add:function add(a, b) {
        return a + b;
    },

    sub:function substract(a, b) {
        return a - b;
    },
    hello:123
}

console.log("Printed in temp "+obj);

module.exports = obj;   // above obj (object) is exported