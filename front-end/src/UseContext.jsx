import React, { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import Toolbar from './components/Toolbar';

function Usecontext() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default Usecontext;
