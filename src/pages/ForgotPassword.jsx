import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Send the request for the email
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/forgot-password`,
        { email }
      );
      toast.success("Instructions sent, check your email!");
      setEmail("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("There was an error");
    }
  };
  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            We will send you a step by step guide to recover your{" "}
            <span className="font-normal">Account</span>
          </h1>
          <form
            className="mt-10 bg-white p-5 rounded-lg"
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

            <input
              type="submit"
              value="Send Instructions"
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

export default ForgotPassword;
