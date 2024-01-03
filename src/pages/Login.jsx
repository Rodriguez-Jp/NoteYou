import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axiosClient from "../config/axiosClient";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validates if the fields are not empty
    if ([email.trim(), password.trim()].includes("")) {
      toast.error("Some fields are empty", {
        id: "empty-fields",
      });
      return;
    }

    //Query the backend for login
    try {
      const { data } = await axiosClient.post("/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            Login to access your <span className="font-normal">notes</span>
          </h1>
          <form
            className="mt-10 bg-white p-5 rounded-lg "
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="block font-semibold text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-1 border mt-2 rounded"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
