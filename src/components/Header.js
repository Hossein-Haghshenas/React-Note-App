import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <section className="header">
      <h1>Notes App</h1>
      <button
        onClick={() => handleDarkMode((mode) => !mode)}
        className="toggle-btn"
      >
        Dark Mode
      </button>
    </section>
  );
};

export default Header;
