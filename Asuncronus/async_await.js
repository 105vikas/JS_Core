// ✅ Topic: Async Await
//  Async Await always return a promise, it don't follow the hosting,
// Async allow system to create new asyncronus function & awiat is exicute the asyncronus fun

(async () => {
    let data = await fetch('https://dummyjson.com/test')
    let dataJson = await data.json()
    console.log("DATA: ", dataJson)
    console.log("Imidate Exicution")
})()