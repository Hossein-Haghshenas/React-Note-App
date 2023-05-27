import React from "react";

const FirstNote = ({ darkMode }) => {
  return (
    <section className={`first-note-container ${darkMode && "first-note-container-dark"}`}>
      <h2>Create your first note !</h2>{" "}
    </section>
  );
};

export default FirstNote;
