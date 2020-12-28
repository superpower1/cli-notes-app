const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return {};
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
  
  if (notes[title]) {
    notes[title] = body;
    saveNotes(notes);   
    console.log(chalk.keyword('orange')('Existing note has been modified!'))
  } else {
    notes[title] = body;
    saveNotes(notes);
    console.log(chalk.green('New note has been added!'))
  }
}

const removeNote = ({ title }) => {
  const notes = loadNotes();

  if (notes[title]) {
    delete notes[title];
    saveNotes(notes);   
    console.log(chalk.green(`Note '${title}' has been removed!`))
  } else {
    console.log(chalk.red(`Cannot find note with title '${title}'`))
  }
}

const listNote = () => {
  const notes = loadNotes();

  Object.keys(notes).forEach((title) => {
    console.log(chalk.inverse.bold(title));
    console.log(notes[title], '\n')
  })
}

const readNote = ({ title }) => {
  const notes = loadNotes();

  if (notes[title]) {
    console.log(chalk.inverse.bold(title));
    console.log(notes[title], '\n')
  } else {
    console.log(chalk.red(`Cannot find note with title '${title}'`))
  }
}

module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}