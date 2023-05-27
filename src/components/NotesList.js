import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <section className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => {
        const { id, text, date } = note;
        return <Note id={id} key={id} text={text} date={date} handleDeleteNote={handleDeleteNote} />;
      })}
    </section>
  );
};

export default NotesList;
