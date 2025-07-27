import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>
        {" "}
        <h2>Food Recipe item</h2>
      </NavLink>

      <input type="text" placeholder="Enter the item" />
      <button>search</button>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/favourites"}>Favourites</NavLink>
    </nav>
  );
};

export default Navbar;
