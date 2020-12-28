const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const saveNotes = (notes) => {
  try {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
  } catch (error) {
    console.log(chalk.red('Fail to save notes!'));
  }
}

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  notes.push({
    title,
    body
  })
  saveNotes(notes);
}

module.exports = {
  addNote,
}