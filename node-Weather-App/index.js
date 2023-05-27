// const key = "L5BCUD5MP4QHZFT43YEJ878G7";
// // const place = "Delhi";

// async function getWeather(key, place) {
//   const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${key}`;
//   let result = {};

//   const response = await fetch(API);
//   const jsonData = await response.json();

//   result = {
//     address: jsonData["resolvedAddress"],
//     timezone: jsonData["timezone"],
//     description: jsonData["description"],
//     CurrentData: {
//       date: jsonData["days"][0]["datetime"],
//       currTemp: (jsonData["days"][0]["temp"] - 32) * (5/9).toFixed(2),
//       currWeather: jsonData["days"][0]["conditions"],
//     },
//   };
//   return result;
// }

// getWeather(key, process.argv[2]).then((data)=>{
//     console.log(data)
// })

// function getData(place, callback){
//     setTimeout(()=>{
//         const obj = {
//             name : "Bhavye",
//             gender : 'male',
//             age : 12
//         }
//         callback(obj)
//     }, 2000)
// }

// getData("Delhi", (obj)=>{
//     console.log(obj)
// })

// function sum(){
//     setTimeout(()=>{
        
//     },2000)
// }


// function add(a, b, callback){
//     setTimeout(()=>{
//         callback(a, b)
//     }, 2000)
// }

// add(1,4,(a, b) => {
//     console.log(a+b)
// })

// function prod({a, b}){
//     console.log(a,b)
// }

// prod({a:10,b:20})

