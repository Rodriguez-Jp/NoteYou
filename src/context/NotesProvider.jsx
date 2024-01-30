import { useEffect, useState, createContext } from "react";
import axiosClient from "../config/axiosClient";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider value={{ notes }}>{children}</NotesContext.Provider>
  );
};

export { NotesProvider };

export default NotesContext;
