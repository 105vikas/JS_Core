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


// Abstraction: 


// Inheritance
// Polymorphism