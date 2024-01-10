import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="border-r-gray-300 border-r">
      <div className="md:w-72 lg:w-96 my-4 ">
        <ul className="text-white font-bold">
          <li className="p-2">
            <Link
              to={"/notes"}
              className="bg-violet-500 w-full block p-2 rounded-lg text-center hover:bg-violet-600 transition-colors duration-300"
            >
              Notes
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="bg-violet-500 w-full block p-2 rounded-lg text-center hover:bg-violet-600 transition-colors duration-300"
              to={"/notes/trash"}
            >
              Trash
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
