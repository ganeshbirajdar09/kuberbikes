import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo navbar">
        <Link style={{ fontSize: "1.3rem" }} to="/">
          Kuber Ebikes
        </Link>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/customers">Our Proud Clients</Link>
    </nav>
  );
};

export default Navbar;
