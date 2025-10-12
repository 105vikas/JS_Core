// Shallow Copy: Is the creating new memory of that object but it only take first layer as copy & other are the refernce of previous.
// ex a={...b}, a=Object.assign(b)

// Deep copy: It create the new memory of that object with all the nested value
// a=JSON.parse(JSON.stringify(b))

let a = { a: "b", c: { d: "e" } }

let shallCopy = { ...a }
shallCopy.a = "ee"
shallCopy.c.d = "ff"
// console.log(shallCopy, "shallCopy")
// console.log(a, "Real Object")

let b = { a: "b", c: { d: "e" } }
let deepCopy = JSON.parse(JSON.stringify(b))
deepCopy.a = "bb"
deepCopy.c.d = "cc"
// console.log(deepCopy, "Deep Copy")
// console.log(b, "Real Object")