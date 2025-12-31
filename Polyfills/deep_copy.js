// ✅ Topic: Deep Copy


let obj = { a: "a", b: { c: "c", d: { e: "e" } } }
let deepObject = JSON.parse(JSON.stringify(obj))
deepObject.a = "aa";
deepObject.b.c = "cc"

// let shallowObject = { ...obj }
// shallowObject.a = "aa";
// shallowObject.b.c = "cc"
// console.log(shallowObject)

console.log(obj)
console.log(deepObject)

Object.prototype.myDeepCopy = function (objct) {
    console.log(objct, "obj")
    console.log(this, "this")
    let newObj = {};
    // objct.
    // for (let i = 0)


}

let myDeepObject = obj.myDeepCopy(obj)