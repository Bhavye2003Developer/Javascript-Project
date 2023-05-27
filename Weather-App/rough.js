
function add(a, b, callback){
    console.log("Hey")
    console.log(callback(a, b))
}

function sum(a, b){
    return a+b
}

add(1,4, sum)