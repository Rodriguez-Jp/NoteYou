import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";

function ConfirmAccount() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isBusy, setIsBusy] = useState(true);

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/confirm/${id}`
        );

        console.log(response);
        setIsBusy(false);
      } catch (error) {
        setError(true);
        setIsBusy(false);
      }
    };
    confirmAccount();
  }, []);

  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            Confirm your account and begin taking{" "}
            <span className="font-normal">notes</span>
          </h1>
          {isBusy ? null : (
            <section>
              {error ? (
                <Alert msg={{ err: true, message: "Invalid Token" }} />
              ) : (
                <Alert
                  msg={{ err: false, message: "Account confirmed succesfully" }}
                />
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default ConfirmAccount;
