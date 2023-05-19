// const body = document.querySelector("body")
// const stop = document.querySelector("#button")
// // let count = 0;
// // const id = setInterval(()=>{
// //     if (count==10) clearInterval(id)
// //     console.log(`The value : ${count}`)
// //     count++;
// // })

// const getColor = ()=>{
//     return `rgb(${Math.ceil(Math.random(0,255) * 255)}, ${Math.ceil(Math.random(0,255) * 255)}, ${Math.ceil(Math.random(0,255) * 255)})`
// }

// const id = setInterval(()=>{
//     body.style.backgroundColor = getColor()
//     // console.log(getColor())
// }, 1000)

// var button = document.getElementById("button");
// button.addEventListener("click", function(event){
//    clearInterval(id)
//    console.log("Colors stop")
// });

// const arr = [10, 20, 30, 40, 50];

// const myProm = new Promise((resolve, reject) => {
//   if (arr.includes(30)) resolve();
//   else {
//     reject();
//   }
// });

// myProm
//   .then(() => { // always returns promise.
//     console.log("Success found");
//   })
//   .catch(() => {
//     console.log("Not able to find");
//   });

// function test(string){
//     return new Promise((resolve, reject)=>{
//         if (string.length<10) resolve("You won")
//         else{
//             reject("you lost")
//         }
//     })
// }

// test("Bhavye").then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })

const API = "https://jsonplaceholder.typicode.com/todos";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", API);

// // xhr.onreadystatechange = ()=>{
// //     if (xhr.readyState==4){
// //         // console.log(xhr.response)
// //         const response = xhr.response
// //         const data = JSON.parse(response)
// //         Array.from(data).forEach((ele)=>{
// //             console.log(ele)
// //         })
// //     }
// // }

// xhr.onload = () => {
//   const response = xhr.response;
//   const data = JSON.parse(response);
//   // Array.from(data).forEach((ele)=>{
//   //     console.log(ele)
//   console.log(data)
//   // })
// };

// xhr.send();

// const getData = (URL) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", URL);

//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
//       else {
//         reject("Error occurs");
//       }
//     };

//     xhr.send();
//   });
// };

// getData(API)
//   .then((response) => {
//     const jsonData = JSON.parse(response)
//     console.log(jsonData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const response = fetch(API)
// response.then(res => {
//     return res.json()
// }).then(json => {
//     console.log(json)
// })

async function getData(){
    const response = await ( await fetch(API)).json()
    // console.log(response)
    return response
}
const data = getData()
data.then(info => {
    console.log(info)
})