// ✅ Topic: Call Apply Bind
// This method used when we have many object and we want to create a funciton for any object that we pass on that like print info, some for to calculate something

let printFullName = function (village, city) {
    console.log("Name: ", this.firstName, " ", this.lastName, "from ", village, "in ", city)
}

let person1 = {
    firstName: "aaa",
    lastName: "bbbb"
}
let person2 = {
    firstName: "cccc",
    lastName: "dddd"
}

printFullName.call(person1, "eeee", "ffff")
printFullName.call(person2, "gggg", "hhhh")

printFullName.apply(person1, ["iiii", "jjjj"])
printFullName.apply(person2, ["kkk", "llll"])

let bindFun = printFullName.bind(person1, "mmm", "nnn")
bindFun()
let bindFunPerson = printFullName.bind(person2, "ooo", "ppp")
bindFunPerson()