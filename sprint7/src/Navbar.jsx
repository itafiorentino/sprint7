import React from "react";
import StarWarsLogo from "./assets/starwars-logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col bg-black font-mono text-white">
      <div className="flex h-32 items-center justify-center">
        <NavLink to="/" className="m-3 w-40 md:w-60 active:w-36 md:active:w-56">
          <img src={StarWarsLogo} alt="Logo" className="w-full h-auto" />
        </NavLink>
      </div>
      <div className="flex items-center justify-center h-16 ring-1 ring-stone-500">
        <NavLink to="/" className="flex h-16 p-1 py-2 m-0 w-1/2 lg:w-40 lg:p-5 justify-center items-center border-x border-stone-500  bg-black hover:text-stone-500 active:bg-black focus:outline-none focus:border-b-4 focus:border-b-blue-700">HOME</NavLink>
        <NavLink to="/starships" className="flex h-16 p-1 py-2 m-0 w-1/2 lg:w-40 lg:p-5 justify-center items-center border-r border-stone-500 bg-black hover:text-stone-500 active:bg-black focus:outline-none focus:border-b-4 focus:border-b-blue-700">STARSHIPS</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
