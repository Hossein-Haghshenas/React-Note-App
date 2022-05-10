import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date }) => {
  return (
    <section className="note" key={id}>
      <span>{text}</span>
      <section className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size={"1.3em"} />
      </section>
    </section>
  );
};

export default Note;
