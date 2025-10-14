// ✅ Topic: Promises

//1
let dataOnce = fetch('https://dummyjson.com/test').then(valOne => valOne.json()).then(data => console.log(data, "DATA from normal method"))
console.log(dataOnce, "data ONe")


//2
let pomise = new Promise((resolve, reject) => {
    resolve("SuccessOne1")
    reject("Not SuccesOne1")
})

console.log(pomise.catch(e => console.log(e)), "Promise When reject Have to add the Catch to handle that error")

// 3
let promiseCallAPI = new Promise((resolve, reject) => {
    let data = fetch('https://dummyjson.com/test')
    let Value = data.then(val => val.json());
    Value.then(val => resolve(val))
        .catch(error => reject(error))
})
promiseCallAPI.then(resolve => console.log(resolve))
    .catch(error => console.log(error))


// Promise API

// Promise All-> As soon as any got reject if not then it return response of all promise
let promiseAPIAll = Promise.all([dataOnce, pomise, promiseCallAPI])
promiseAPIAll.then(val => console.log(val, "PromiseSuAPI All api"))
    .catch(error => console.log(error, "PromiseAPI All api Error"))

// Promise All Settle-> it return a array once all the promise is resolved
let promiseAPISettle = Promise.allSettled([dataOnce, pomise, promiseCallAPI])
promiseAPISettle.then(val => console.log(val, "PromiseSuAPI Settle api"))
    .catch(error => console.log(error, "PromiseAPI Settle api Error"))

// Promise Any-> it return the value of first promise that will resolved
let promiseAPIAny = Promise.any([dataOnce, pomise, promiseCallAPI])
promiseAPIAny.then(val => console.log(val, "PromiseSuAPI Any  api"))
    .catch(error => console.log(error, "PromiseAPI Any  api Error"))

// Promise Race-> As soon as first api resolve it will return the value of fist promise response
let promiseAPIRace = Promise.race([dataOnce, pomise, promiseCallAPI])
promiseAPIRace.then(val => console.log(val, "PromiseSuAPI Race api"))
    .catch(error => console.log(error, "PromiseAPI Race api Error"))