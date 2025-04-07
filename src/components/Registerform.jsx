import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Registerform() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nav = useNavigate();
  async function handleRegistration(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const formData = {
      email,
      password,
    };
    try {
      const response = await fetch(
        "https://backend.skillup.hubnex.in/skillup/api/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      } else {
        console.log(data);
        alert(data.message);
        alert(`please copy your admin id - ${data.adminId}`);
        // alert(`please copy your admin id - ${data.adminId}`);
        nav("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-screen fixed left-0 top-0 z-[500] flex items-center justify-center bg-black/50">
      <div className="absolute w-full h-full bg-black/30 -z-30"></div>
      <div className="relative">
        <div className="form bg-white p-8 rounded shadow-md w-full max-w-md">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="w-full bg-gradient-to-r from-green-500 to-green-700 rounded-sm text-white font-semibold h-10"
                onClick={handleRegistration}
              >
                <div className="flex items-center justify-center gap-2">
                  Register as admin
                </div>
              </button>
            </div>
            <div className="text-center mt-4 text-blue-900">
              <NavLink to={"/login"}>Login ?</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registerform;
