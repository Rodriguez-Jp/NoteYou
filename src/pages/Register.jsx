import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validates if the fields are not empty
    if (
      [
        name.trim(),
        email.trim(),
        password.trim(),
        repeatPassword.trim(),
      ].includes("")
    ) {
      toast.error("Some fields are empty", {
        id: "empty-fields",
      });
      return;
    }

    // Validates the email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(email)) {
      toast.error("Invalid email", {
        id: "invalid-email",
      });
      return;
    }

    //Validates strong password
    // const passwordRegex =
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   toast.error(
    //     "Password must contain 8 characters, one uppercase, one number and one symbol",
    //     { id: "not-strong-password" }
    //   );
    //   return;
    // }

    // Validates the confirmation of the password
    if (password !== repeatPassword) {
      toast.error("Passwords are not equal", {
        id: "invalid-passwords",
      });
      return;
    }

    //When all validations pass, submit the new user to backend

    try {
      const { data } = await axios.post("http://localhost:4000/api/users", {
        name,
        email,
        password,
      });

      toast.success(data.msg);
    } catch (error) {
      console.log(error);
    }
    console.log("Done");
  };

  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            register to begin taking <span className="font-normal">notes</span>
          </h1>
          <form
            className="mt-10 bg-white p-5 rounded-lg"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="block font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-1 border mt-2 rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="block font-semibold text-lg mt-2">
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
              placeholder="Confirm Your Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
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
