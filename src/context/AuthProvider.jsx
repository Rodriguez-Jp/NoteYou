import { useEffect, useState, createContext } from "react";
import axiosClient from "../config/axiosClient";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    //Checks for the token, in case there isn't returns
    const authUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axiosClient("/users/profile", config);

        setAuth(data);

        console.log("done");
      } catch (error) {
        console.log(error);
      }
    };

    authUser();
  }, []);
  return (
    <AuthContext.Provider value={{ setAuth }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
