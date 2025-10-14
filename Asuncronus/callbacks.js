// ✅ Topic: Callbacks

// Function that pass another function as a argumernt to invoke that 

let a = 32;
function callb(callback) {
    a = a * 2;
    callback("Success");
}
function callBackFun() {
    console.log(a, "Callback 1st val")
    callb(val => {
        console.log("VAlue return by callback: ", val)
    });
    console.log(a, "After Callback Value")
}
callBackFun();
