import ReactDom from "react-dom/client";
import RegistrationPage from "./components/Login-Register/registrationPage";
import LoginPage from "./components/Login-Register/loginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/Homepage/homepage";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

function App() {
  const [reg, setShowReg] = useState(true);
  const [log, setShowLog] = useState(false);

  const handleShowReg = () => {
    setShowReg(true);
    setShowLog(false);
  };

  const handleShowLog = () => {
    setShowReg(false);
    setShowLog(true);
  };

  return (
    <div>
      <nav>
        <button className="navBtn" onClick={handleShowReg}>
          Registration
        </button>
        <button className="navBtn" onClick={handleShowLog}>
          Login
        </button>
      </nav>
      {reg && <RegistrationPage />}
      {log && <LoginPage />}
    </div>
  );

  // return <HomePage />;
}

root.render(<App />);
