import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import "./Navbar.css";
const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav>
      <NavLink to={"/"}>
        {" "}
        <h2>Food Recipe item</h2>
      </NavLink>

      <input
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        type="text"
        placeholder="Enter the item"
      />
      <button onClick={handleSubmit}>search</button>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/favourites"}>Favourites</NavLink>
    </nav>
  );
};

export default Navbar;
