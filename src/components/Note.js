import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <section className="note" key={id}>
      <span>{text}</span>
      <section className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size={"1.3em"}
          onClick={() => handleDeleteNote(id)}
        />
      </section>
    </section>
  );
};

export default Note;
