# A simple cli notes managing app
## Add a note
`node index.js add --title='some title' --body='note body'`

Note: 'title' is an unique identifier therefore the note with same title will be updated instead of creating a new one. 

## Remove a note
`node index.js remove --title='some title'`

## List all notes
`node index.js list`

## Read a single note
`node index.js read --title='some title'`
