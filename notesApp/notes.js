const fs = require("fs");
const chalk = require('chalk')

const getData = () => {
  return JSON.parse(fs.readFileSync("notes.json"));
};

const saveData = (data) => {
  fs.writeFileSync("notes.json", JSON.stringify(data));
};

const addNote = (title, body) => {
  const data = getData();

  const noteFound = data.filter((note) => {
    return note.title == title;
  });
  if (noteFound.length == 0) {
    data.push({
      title: title,
      body: body,
    });
    saveData(data);
  } else {
    console.log(`Note with title ${title} already present`);
  }
};

const removeNote = (title) => {
  const data = getData(); //data is an array of objects

  const deletedArray = data.filter((element) => {
    return element.title != title;
  });
  if (deletedArray.length == data.length) console.log("Title not found");
  else {
    saveData(deletedArray);
    console.log("Note has been removed successfully");
  }
};

const getNotes = () => {
  const notes = getData();
  notes.forEach((element) => {
    console.log(`\n\ntitle : ${element.title}\nnote : ${element.body}`);
  });
};

const getParticularNote = (title) => {
  const particularNote = getData().filter((note) => {
    return note.title == title;
  });
  if (particularNote.length == 0) console.log("No note found!!!");
  else {
    console.log(`Description : ${particularNote[0].body}`);
  }
};

module.exports = { getNotes, addNote, removeNote, getParticularNote };
