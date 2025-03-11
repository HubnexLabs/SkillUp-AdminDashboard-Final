import React from "react";
import Cookies from "js-cookie";
import { Outlet, NavLink } from "react-router-dom";
function Header({ login, setLogin, isEmpty }) {
  const handleLogout = () => {
    Cookies.remove("jwttoken");
    setLogin({});
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-[70] h-20 py-2">
      <div className="w-screen flex items-center justify-between h-full">
        <div className="w-full cursor-pointer mx-9">
          <h1 className="font-bold text-xl lg:text-4xl text-green-600">
            Skillup
          </h1>
          <p className="font-base text-green-600 tracking-widest">
            An initiative By Hubnex Labs
          </p>
        </div>

        <div className="w-full hidden lg:flex items-center justify-end h-full mx-9">
          <button
            className="w-44 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-600 rounded"
            onClick={handleLogout}
          >
            <p className="flex text-nowrap text-white font-base lg:font-semibold items-center justify-center gap-2">
              {isEmpty() ? "Login" : "Logout"}
            </p>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
