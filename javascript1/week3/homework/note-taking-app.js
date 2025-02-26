const notes = [];

function saveNote(content, id) {
  if (typeof content !== "string" || typeof id !== "number") {
    console.log(
      "Invalid input. Content should be a string and id should be a number"
    );
    return;
  }
  // Short notation for { content: content, id: id }
  const note = { content, id };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Invalid input. Id should be a number");
    return;
  }
  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }
  console.log("Note not found");
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();

// Extra feature
function addKindWordsToNotes() {
  for (let note of notes) {
    note.content += ". You're doing great!";
  }
}

addKindWordsToNotes();
console.log(notes);
