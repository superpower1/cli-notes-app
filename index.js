const yargs = require('yargs');
const utils = require('./utils.js');

// Customize yargs version
yargs.version('1.0.1')

// Customize yargs add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => utils.addNote(argv),
})

// Customize yargs remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => utils.removeNote(argv),
})

// Customize yargs list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => utils.listNote()
})

// Customize yargs read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => utils.readNote(argv)
})

const command = yargs.argv;

yargs.parse();