import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            register to begin taking <span className="font-normal">notes</span>
          </h1>
          <form className="mt-10 bg-white p-5 rounded-lg ">
            <label htmlFor="name" className="block font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-1 border mt-2 rounded"
            />
            <label htmlFor="email" className="block font-semibold text-lg mt-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-1 border mt-2 rounded"
            />
            <label
              htmlFor="password"
              className="block font-semibold text-lg mt-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-1 border mt-2 rounded"
            />
            <label
              htmlFor="confirm-password"
              className="block font-semibold text-lg mt-2"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-1 border mt-2 rounded"
            />
            <input
              type="submit"
              value="Register"
              className="w-full p-2 bg-sky-400 rounded font-bold text-white mt-5 hover:cursor-pointer hover:bg-sky-300 transition-colors"
            />
          </form>
        </div>
        <div className="p-2 mx-auto text-center text-sky-900">
          <Link to="/" className="hover:text-sky-400 transition-colors">
            Back to login page
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
