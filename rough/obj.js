// function getData(obj){
//     console.log(`The name is : ${obj.name}, and email : ${obj.email}`)
// }

// user1 = {
//     name : "Bhavye",
//     email : "bhavyedevelopment@gmail.com"
// }

// user2 = {
//     name : "Shaurye",
//     email : "shaurye001@gmail.com"
// }

// getData(user1)
// getData(user2)

class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }
    getData(){
        console.log(`The name is : ${this.name}, and email : ${this.email}`)
    }
}

const user1 = new User("Bhavye", "bhavyedevelopment2003@gmail.com")
// user1.getData()
