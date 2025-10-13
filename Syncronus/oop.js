// ✅ Topic: Oop

// OOPS make code resuable, readable & provide scale

// Encapsulation: Make method/function into a component so the user don't able to access it directly

class encapsulationFun {
    constructor() {
        let password = "vias yadav";
        let changePassword = {
            getter: function () {
                return password;
            },
            setter: function (newPassword) {
                password = newPassword
            }
        }
        return changePassword;
    }
}

let newEncapsulation = new encapsulationFun();
let previousPassword = newEncapsulation.getter();
console.log("Previous Password: ", previousPassword)

newEncapsulation.setter("sonu yadav")
let newPassword = newEncapsulation.getter();
console.log("New Password: ", newPassword)


// Abstraction: hide implementation only show the behaviour
function abstractionFun() {
    let firstName;
    let lastName;
    let abstractionObje = {}
    abstractionObje.setFName = function (name) {
        firstName = name;
    }
    abstractionObje.setLName = function (name) {
        lastName = name;
    }
    abstractionObje.printValue = function () {
        return `First Name: ${firstName}, Last Name: ${lastName}`
    }
    return abstractionObje;
}

let abstractionObjData = abstractionFun();
abstractionObjData.setFName("Vvvvv")
abstractionObjData.setLName("Vvvvv")
console.log(abstractionObjData.printValue())


// Inheritance
class inheri {
    constructor() {

    }
}


// Polymorphism