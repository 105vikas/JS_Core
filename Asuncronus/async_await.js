// ✅ Topic: Async Await
//  Async Await always return a promise, it don't follow the hosting,
// Async allow system to create new asyncronus function & awiat is exicute the asyncronus fun

const apiCall = fetch('https://dummyjson.com/test')
let data = apiCall.then(data => data.json())
data.then(value => console.log(value, "valu"))
    .catch(error => console.log(error))
    .finally(console.log("Happy"))

let a;


(async () => {
    let data = await fetch('https://dummyjson.com/test')
    let dataJson = await data.json()
    console.log("DATA: ", dataJson)
    console.log("Imidate Exicution")
})()