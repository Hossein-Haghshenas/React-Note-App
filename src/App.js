import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

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

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
