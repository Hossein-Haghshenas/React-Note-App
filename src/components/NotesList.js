import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <section className="notes-list">
      {notes.map((note) => {
        const { id, text, date } = note;
        return (
          <Note
            id={id}
            text={text}
            date={date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <AddNote handleAddNote={handleAddNote} />
    </section>
  );
};

export default NotesList;
