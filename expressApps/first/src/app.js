const path = require('path')

const express = require("express");

// console.log(__dirname, __filename)
// console.log(path.join(__dirname, "../public"))

const app = express();

app.set('view engine', 'hbs')

// app.use('/',express.static(path.join(__dirname, "../public"))) // to connect static files like html to src files

//app.com
//app.com/home

app.get("/", (req, res) => {
//   res.send("<h1>Hey it's my first express app</h1>");
    res.render('base/index', {
        name : "Bhavye Jain",
        age : 20
    })
});

app.get("/help", (req, res) => {
  // res.send("This is my express app help page.")
  res.send({
    name: "Bhavye",
    age: 20,
  });
});

app.get("/about", (req, res) => {
//   res.send("<h1>This is my express app ABOUT page.</h1>");
    res.sendFile(path.join(__dirname, "../public/about.html"))
});


app.get("/weather", (req, res) => {
  // res.send("This is my express app WEATHER  page.")
  res.send({
    location: "India",
    state: "delhi",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
