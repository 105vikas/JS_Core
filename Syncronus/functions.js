// ✅ Topic: Functions

// Imediate invode function: Exicute as soon as the code come to this line
(() => {
    console.log("Imediate Invoke function")
})()

// function decleration/statement: function with having a name & it's also follow the hosting
abc();
function abc() {
    console.log("function decleration/statement")
}

// function execution: function without having a name & it don't hosted
// ab() -> getting error 
const ab = function () {
    console.log("function execution")
}
ab();

// Arrow function -> short & don't fllow hosting,alternative of normal function 
const arrowfun = () => {
    console.log(this, "Arrow function this it's refer global & globleObj refer window in website")
}
arrowfun();
[1, 2, 3, 4, 5].map((val, i) => { console.log("Value: ", val, "Index: ", i) });

// callback function: Function pass into another function as argument to invoke that function to exicute
let a = 4;
const backFun = (callback) => {
    a = a * 2;
    callback('12');
}
const callFun = () => {
    console.log(a, 'callBack');
    backFun((val) => console.log(val, "Value"));
    console.log(a, 'CallBack-2')
}
callFun();

// High oder function: function that take argument as a function & return a function 

const highFun = () => {
    console.log("2")
}
const oderFun = (callback) => {
    console.log("1")
    callback();
}
oderFun(highFun)