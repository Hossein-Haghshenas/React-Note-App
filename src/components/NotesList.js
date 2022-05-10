import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <section className="notes-list">
      {notes.map((note) => {
        const { id, text, date } = note;
        return <Note id={id} text={text} date={date} />;
      })}
    </section>
  );
};

export default NotesList;
