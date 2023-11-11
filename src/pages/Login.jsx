import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            Login to access your <span className="font-normal">notes</span>
          </h1>
          <form className="mt-10 bg-white p-5 rounded-lg ">
            <label htmlFor="email" className="block font-semibold text-lg">
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
            <input
              type="submit"
              value="Login"
              className="w-full p-2 bg-sky-400 rounded font-bold text-white mt-5 hover:cursor-pointer hover:bg-sky-300 transition-colors"
            />
          </form>
        </div>
        <div className="p-2 md:flex md:justify-between text-sky-900">
          <Link
            to="forgot-password"
            className="hover:text-sky-400 transition-colors text-center block"
          >
            Forgot your password?
          </Link>
          <Link
            to="register"
            className="hover:text-sky-400 transition-colors text-center block"
          >
            Don't have an account, register here!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
