// ✅ Topic: Closure

// Closure: when a inner object has a reference of the outer variable 

function closure() {
    let variable1 = "firstClosre"
    function subClosure() {
        return variable1;
    }
    return subClosure;
}
let closureVar = closure();
console.log('Closure Variable: ', closureVar())