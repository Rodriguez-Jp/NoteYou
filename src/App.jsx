import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import ConfirmAccount from "./pages/ConfirmAccount";
import Notes from "./pages/Notes";
import Trash from "./pages/Trash";
import PrivateRoute from "./layouts/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="forgot-password/:token" element={<NewPassword />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
            </Route>

            <Route path="/notes" element={<PrivateRoute />}>
              <Route index element={<Notes />} />
              <Route path="trash" element={<Trash />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
