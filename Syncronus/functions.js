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

// Arrow function -> short & don't fllow hosting
const arrowfun = () => {

}

// callback function 

// High oder function