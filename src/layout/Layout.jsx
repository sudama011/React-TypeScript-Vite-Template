import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Theme from "./Theme";

export default function Layout() {
  return (
    <>
      <Theme />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
