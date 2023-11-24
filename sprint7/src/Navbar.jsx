import React from "react";

function Navbar () {


    return (
        <div className="navbar bg-black">
  <div className="navbar-start bg-red-600">
    <a className="btn btn-ghost text-xl text-white">Hacer to do de styling, luego fix fetch y backend + routing</a>
  </div>
  <div className="navbar-center hidden lg:flex bg-yellow-200">
    <ul className="menu menu-horizontal px-1 bg-red-600">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
      <li><button className="m-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button></li>
<li><button className="m-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button></li>
    </ul>
  </div>
</div>

        
    )


}

export default Navbar;