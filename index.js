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
  handler: (argv) => utils.addNote(argv),
})

// Customize yargs remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing a new note!')
})

// Customize yargs list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => console.log('Listing all note!')
})

// Customize yargs read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('Reading a new note!')
})

const command = yargs.argv;

yargs.parse();