import { useState } from "react";
import { NavLink} from "react-router-dom";
import Signup from "./Signup.jsx";

function Login({ updateUserData }) {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  const [user, setUser] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user.email);
        updateUserData(data.user.email);
        console.log(data);
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col items-center min-w-fit min-h-screen bg-black font-mono text-white">
      <div className="flex flex-col items-center m-20 mb-10">
      {user===formData.email && user!='' ? <h1 className="m-10 hover:text-yellow-300">You are logged in!</h1> : <h1></h1>}
        <h1 className="m-10 hover:text-yellow-300">Login</h1>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={(e) => handleChange(e)}
            className="m-5 p-3 text-stone-700 placeholder-gray-400"
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={(e) => handleChange(e)}
            className="m-5 p-3 text-stone-700 placeholder-gray-400"
          ></input>
          <div className="flex w-full justify-center my-10">
            <button
              className="login-btn mt-5 p-3 border border-stone-500  bg-black hover:bg-yellow-300 active:bg-black"
              type="submit"
            > Log in
            </button>
          </div>
        </form>
      </div>

        <NavLink
          className="flex mb-10 w-40 md:w-52 justify-center text-center text-sm"
          to="/starships"
        > TAKE ME TO STARSHIPS
        </NavLink>


      <NavLink
        className="flex mb-20 w-40 md:w-52 justify-center text-center text-sm"
        to="/signup"
      >OR CREATE AN ACCOUNT
      </NavLink>
      <Signup />
    </div>
  );
}

export default Login;

