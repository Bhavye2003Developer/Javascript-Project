const fs = require('fs')
// const fileHandler = require('./filesHandler.js')
const notes = require("./notes.js")

const chalk = require('chalk')

// fs.writeFileSync('./test.txt', 'Bhavye the god\n')
// fs.appendFileSync('test.txt', 'This is quite interesting...')
// console.log("Written successfully")


// fileHandler.add(210,20)

// console.log(notes.getNotes())

// console.log(chalk.inverse.green("Hey this is a success message"))

// console.log(process.argv.slice(2, process.argv.length))



const operation = process.argv[2]

if (operation=="add"){
    notes.addNote(process.argv[3], process.argv[4])
    console.log("Note added successfully")
}
else if (operation=="rm"){
    notes.removeNote(process.argv[3])
}
else if (operation=="ls"){
    console.log("listing all notes...")
    notes.getNotes()
}
else if (operation=='get'){
    notes.getParticularNote(process.argv[3])
}
else{
    console.log(chalk.red("Command not found"))
}