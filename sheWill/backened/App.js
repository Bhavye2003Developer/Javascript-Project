const express = require('express');
const app = express();
const path = require('path');

console.log(__dirname)

// Serve static files from the "client" folder
app.use(express.static(path.join(__dirname, '../client')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client','html', 'index.html'));
});


app.get('/relax', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client', 'html', 'stress.html'))
})

app.get('/consult', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client', 'html', 'consult.html'))
})

// Add more routes as needed for your pages

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});