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

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
