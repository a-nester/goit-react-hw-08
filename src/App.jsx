import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { current } from "./redux/auth/operations";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import { Suspense } from "react";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { AppBar } from "./components/AppBar/AppBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivatRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
