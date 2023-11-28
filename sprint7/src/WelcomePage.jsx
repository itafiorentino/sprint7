import { NavLink } from "react-router-dom";
import StarWarsLogo from "./assets/starwars-logo.png";

function WelcomePage() {
  return (
    <div className="flex flex-col items-center min-w-fit min-h-screen bg-black font-mono text-white">
      <div className="flex w-full justify-center">
        <img src={StarWarsLogo} alt="Logo" className="w-2/5" />
      </div>
      <div className="flex justify-center p-5 m-5 border border-stone-500  bg-black hover:bg-yellow-300 active:bg-black">
        <NavLink className="flex w-40 md:w-52 justify-center text-sm" to="/starships">
          DISCOVER STARSHIPS
        </NavLink>
      </div>
      <div className="flex justify-center p-5 m-5 border border-stone-500  bg-black hover:bg-yellow-300 active:bg-black">
        <NavLink className="flex w-40 md:w-52 justify-center text-sm" to="/login">
          LOGIN / SIGN UP
        </NavLink>
      </div>
    </div>
  );
}

export default WelcomePage;
