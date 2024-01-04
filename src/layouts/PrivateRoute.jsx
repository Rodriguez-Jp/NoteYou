import { Outlet, Navigate } from "react-router-dom";
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

  return <>{auth._id ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default PrivateRoute;
