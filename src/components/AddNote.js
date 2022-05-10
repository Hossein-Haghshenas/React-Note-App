import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = (e) => {
    noteText.trim().length > 0 && handleAddNote(noteText);
    setNoteText("");
  };

  return (
    <section className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type a new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <section className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </section>
    </section>
  );
};

export default AddNote;
