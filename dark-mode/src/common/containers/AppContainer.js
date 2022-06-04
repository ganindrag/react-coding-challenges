import React, {useState} from 'react';
import ThemeContext from '../context/ThemeContext'

export default function AppContainer({ children }) {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <ThemeContext.Provider value={{darkmode, toggleDarkmode: setDarkmode}}>
      {children}
    </ThemeContext.Provider>
  );
}
