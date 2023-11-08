import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About</Link>
        <Link to="/contactus">Contact</Link>
        <Link to="login">Login</Link>
      </nav>
    </header>
  );
}
