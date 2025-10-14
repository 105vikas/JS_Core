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


// Inheritance: pass the poperty to the child object
class inheri {
    constructor() {
        console.log(this, "this of parent object")
        this.firstO = "456"
    }
    parents() {
        console.log("Parents Inheritance", this.firstO)
        return "Parents Inheritance"
    }
}
class inheritat extends inheri {
    constructor() {
        super();
        this.secondO = "123"
    }
    child() {
        console.log("child", this.parents())
        return "child in Inheritance"
    }
}
const newInheritance = new inheritat
console.log(newInheritance.child(), "Inheritance")


// Polymorphism: Polymorhpism is the extracting the parent object & overiding it so that we use it many times
class Polym {
    constructor(polyName) {
        this.polyName = polyName;
    }
    parent() {
        return 'This is the polymorphism Parent'
    }
}
class Orphism extends Polym {
    constructor() {
        super();

    }
    parent() {
        return 'Second is the polymorphism Child'
    }
}
const polymorObj = new Orphism();
console.log(polymorObj.parent())