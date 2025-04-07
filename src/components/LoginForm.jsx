ilimport React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
function LoginForm({ setLogin }) {
  const AdminRef = useRef();
  const PasswordRef = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    const AdminId = AdminRef.current.value;
    const Password = PasswordRef.current.value;
    console.log(AdminId, Password);
    const formData = {
      id: AdminId,
      password: Password,
    };
    try {
      const response = await fetch(
        "https://backend.skillup.hubnex.in/skillup/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      if (
        data.message == "User not found" ||
        data.message == "Incorrect password"
      ) {
        alert(data.message);
        nav("/login");
      } else {
        const user = data.token;
        Cookies.set("jwttoken", data.token, { expires: 1 / 24 });
        setLogin(user);
      }
    } catch (err) {
      console.log(err);

      alert("Incorrect admin id or password");
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
                htmlFor="AdminEmail"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="AdminEmail"
                type="text"
                placeholder="Admin Email"
                ref={AdminRef}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                ref={PasswordRef}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="w-full bg-gradient-to-r from-green-500 to-green-700 rounded-sm text-white font-semibold h-10"
                onClick={handleLogin}
              >
                <div className="flex items-center justify-center gap-2">
                  Login
                </div>
              </button>
            </div>
{/*             <div className="text-center mt-4 text-blue-900">
              <NavLink to={"/register"}>Register ?</NavLink>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
