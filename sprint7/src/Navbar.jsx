import React from "react";
import StarWarsLogo from './assets/starwars-logo.png';

function Navbar () {


    return (
        
        <div className="flex flex-col bg-black font-mono text-white">
      {/* First Row: Logo */}
      <div className="flex h-32 items-center justify-center">
        <div className="m-3 w-40 md:w-60 active:w-36 md:active:w-56">
          {/* Your logo goes here */}
          <img src={StarWarsLogo} alt="Logo" className="w-full h-auto" />
        </div>
      </div>

      {/* Second Row: Buttons */}
      <div className="flex items-center justify-center h-16 ring-1 ring-stone-500">
        <button className="h-16 p-1 py-2 m-0 w-1/2 lg:w-auto lg:p-5 border-x border-stone-500  bg-black hover:text-stone-500 active:bg-black focus:outline-none focus:border-b-4 focus:border-b-blue-700">HOME</button>
        <button className="h-16 p-1 py-2 m-0 w-1/2 lg:w-auto lg:p-5 border-r border-stone-500 bg-black hover:text-stone-500 active:bg-black focus:outline-none focus:border-b-4 focus:border-b-blue-700">STARSHIPS</button>
      </div>
    </div>

        
    )


}

export default Navbar;