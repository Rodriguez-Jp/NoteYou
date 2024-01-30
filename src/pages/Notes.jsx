import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useNotes from "../hooks/useNotes";

const Notes = () => {
  const { notes } = useNotes();
  console.log(notes);
  return (
    <>
      <div>Notes section</div>
    </>
  );
};

export default Notes;
