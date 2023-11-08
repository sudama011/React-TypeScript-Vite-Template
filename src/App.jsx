import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import { initializeMetadata } from "./utils/metaDataUtils";
import { initializeTheme } from "./utils/themeUtils";

import NotFound from "./components/NotFound";
import Unauthorized from "./components/Unauthorized";
import ErrorPage from "./components/ErrorPage";
import RequireAuth from "./components/RequireAuth";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import { useSelector } from "react-redux";

export default function App() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  useEffect(() => {
    initializeTheme();
  }, []);

  useEffect(() => {
    initializeMetadata(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />

        <Route
          path="/admin"
          element={<RequireAuth role={user.roles} allowedRoles={"admin"} />}
        >
          <Route index element={<p>admin home</p>} />
        </Route>

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
