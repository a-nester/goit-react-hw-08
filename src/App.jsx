import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import { Suspense } from "react";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Layout from "./components/Layout/Layout";
import { selectIsRefreshing } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div>...Refreshing</div>
  ) : (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default App;
