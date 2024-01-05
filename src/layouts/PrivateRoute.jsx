import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      {auth._id ? (
        <div>
          <Header />

          <div>
            <Sidebar />

            <main>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default PrivateRoute;
