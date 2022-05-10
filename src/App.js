import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "my first note !",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "my second note !",
      date: "21/04/2022",
    },
    {
      id: nanoid(),
      text: "my third note !",
      date: "28/04/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
