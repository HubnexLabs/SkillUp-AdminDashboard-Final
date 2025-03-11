import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Cookies from "js-cookie";
import Registerform from "./components/Registerform";
import LoginForm from "./components/LoginForm";
import Table from "./components/Table";
function App() {
  const [login, setLogin] = useState({});
  // const [clientData, setClientData] = useState({});
  const isEmpty = () => {
    return Object.keys(login).length === 0;
  };

  useEffect(() => {
    const userCookie = Cookies.get("jwttoken");
    if (userCookie) {
      setLogin(userCookie);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Header login={login} setLogin={setLogin} isEmpty={isEmpty} />
            }
          >
            <Route
              path="login"
              element={
                isEmpty() ? <LoginForm setLogin={setLogin} /> : <Table />
              }
            />
            <Route
              path="register"
              element={isEmpty() ? <Registerform /> : <Table />}
            />
            <Route
              path="/"
              element={
                !isEmpty() ? <Table /> : <LoginForm setLogin={setLogin} />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
