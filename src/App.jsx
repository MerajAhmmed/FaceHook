import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage ";
import NotFoundPage from "./pages/NotFoundPage";
import ProfiePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/home" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProfiePage />} path="/me" />
        <Route element={<RegistrationPage />} path="/register" />

        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
    </>
  );
}
