import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Popup from "./components/Popup";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [popup, setPopup] = useState(false);
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");
  const [noteArr, setNoteArr] = useState([]);

  useEffect(() => {
    let storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNoteArr(storedNotes);
  }, []);

  const addNote = (heading, description) => {
    const newNote = { head: heading, desc: description };
    const updatedNotes = [...noteArr, newNote];
    setNoteArr(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setHeading("");
    setDesc("");
  };

  const DelNote = (noteIndex) => {
    const updatedNotes = noteArr.filter((_, index) => index !== noteIndex);
    setNoteArr(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar theme={theme} setTheme={setTheme} />
        <Background
          theme={theme}
          setPopup={setPopup}
          popup={popup}
          arr={{ noteArr, setNoteArr }}
          DelNote={DelNote}
        />
        {popup && (
          <Popup
            theme={theme}
            head={{ heading, setHeading }}
            des={{ desc, setDesc }}
            out={{ popup, setPopup }}
            addNote={addNote}
          />
        )}
      </div>
    </>
  );
};

export default App;
