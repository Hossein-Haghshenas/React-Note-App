import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <section className="notes-list">
      {notes.map((note) => {
        const { id, text, date } = note;
        return <Note id={id} text={text} date={date} />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </section>
  );
};

export default NotesList;
