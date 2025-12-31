// poliyfils for any
const p1 = new Promise((resolve, reject) => {
    reject("5")
})
const p2 = new Promise((resolve, reject) => {
    reject("7")
})
// let pFinal = Promise.any([p1, p2])
// pFinal.then(val => console.log(val))

Promise.myAny = function (arg) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let output = [];
        for (let i = 0; i < arg.length; i++) {
            Promise.resolve(arg[i])
                .then(val => resolve(val))
                .catch(err => {
                    count++;
                    if (count === arg.length - 1) {
                        // reject("A/÷ll Promise get rejected", output)
                        throw new AggregateError("All promises were rejected");
                    }
                }
                )
        }
    })
}

let p1Final = Promise.myAny([p1, p2])
p1Final.then(val => console.log(val))



Bind Apply



const fun = function () { //exprestion

}

const fun2 = () => { // Arrow 

}