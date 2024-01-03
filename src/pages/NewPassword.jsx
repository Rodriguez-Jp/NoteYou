import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Alert from "../components/Alert";
import axiosClient from "../config/axiosClient";

function NewPassword() {
  const navigate = useNavigate();
  const [isBusy, setIsBusy] = useState(true);

  //First we validate the token
  const [tokenValid, setTokenValid] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axiosClient.get(`/users/forgot-password/${token}`);
        setTokenValid(true);
        setIsBusy(false);
      } catch (error) {
        toast.error("There was an error");
      }
    };
    validateToken();
  }, []);

  //Once we validate the token we proceed to reset the password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validates the form
    if (newPassword !== confirmPassword) {
      toast.error("Passwords are not equal");
      return;
    }

    //TODO: implement strong password validation
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

    //All validations passed, send the request
    try {
      await axiosClient.post(`/users/forgot-password/${token}`, {
        password: newPassword,
      });
      toast.success("Password changed succesfully");
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
            Change your <span className="font-normal">password</span>
          </h1>
          {isBusy ? null : tokenValid ? (
            <form
              className="mt-10 bg-white p-5 rounded-lg"
              onSubmit={handleSubmit}
            >
              <label htmlFor="password" className="block font-semibold text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-1 border mt-2 rounded"
                placeholder="Your New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label
                htmlFor="confirm-password"
                className="block font-semibold text-lg mt-3"
              >
                Confirm your password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-1 border mt-2 rounded"
                placeholder="Confirm Your New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="submit"
                value="Change Password"
                className="w-full p-2 bg-sky-400 rounded font-bold text-white mt-5 hover:cursor-pointer hover:bg-sky-300 transition-colors"
              />
            </form>
          ) : (
            <Alert msg={{ err: true, message: "Invalid Token" }} />
          )}
        </div>
      </div>
    </>
  );
}

export default NewPassword;
