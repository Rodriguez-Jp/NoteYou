import { Link } from "react-router-dom";

const Alert = ({ msg }) => {
  return (
    <>
      {msg.err ? (
        <section className="w-full mt-5 p-5 shadow-lg rounded-lg bg-red-400 text-white text-center font-bold">
          <p>{msg.message}</p>
        </section>
      ) : (
        <>
          <section className="w-full mt-5 p-5 shadow-lg rounded-lg bg-green-400 text-white text-center font-bold">
            <p>{msg.message}</p>
          </section>
          <div className="p-2 mt-5 mx-auto text-center text-sky-900">
            <Link to="/" className="hover:text-sky-400 transition-colors">
              Login in your new Account
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Alert;
