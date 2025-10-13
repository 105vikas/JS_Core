// ✅ Topic: Timeout Interval

let timeoutSecond = setTimeout(() => {
    console.log("Time out clear")
    clearInterval(intervalValue)
    clearTimeout(timeout)
    clearTimeout(timeoutSecond)
}, 5000)

let timeout = setTimeout(() => {
    console.log("timeout1")
    clearInterval(intervalValue)
}, 6000)

let intervalValue = setInterval(() => {
    console.log("vikas")
}, 2000);
