// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

// https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json

console.log("Hello");

let myInterval = setInterval(()=>{
        console.log("Coming from set-interval")
    }, 1000
)

let myTimeout = setTimeout(()=>{
    console.log("Coming from set-timeout")
}, 4000)

console.log("Done")

function fetchData(){
    fetch("http://randomuser.me/api/?results=25")
    .then((res)=>res.json())
    .then((data)=>console.log(data));
}

fetchData()



