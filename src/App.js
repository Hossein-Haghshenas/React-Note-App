import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { connectToLocalStorage } from "./utils/localStorage";
import FirstNote from "./components/FirstNote";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const notesReady = notes.filter((note) => note.text.toLowerCase().includes(searchText));

  useEffect(() => {
    const ourNotes = connectToLocalStorage("react-notes-app-data");
    ourNotes && setNotes(ourNotes);
  }, [setNotes]);

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleString(),
    };
    setNotes([...notes, newNote]);
    connectToLocalStorage("react-notes-app-data", [...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    connectToLocalStorage("react-notes-app-data", newNotes);
  };

  return (
    <div className={` ${darkMode && `dark-mode`}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        {notes.length === 0 && <FirstNote darkMode={darkMode} />}
        <NotesList notes={notesReady} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default App;
