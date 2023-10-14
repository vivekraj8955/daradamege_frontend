import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";
import { createContext, useEffect, useState } from "react";
import { auth } from "./FireBase";
import {
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";

export const GlobalUser = createContext();
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [logoName, setLogoName] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(true);
        setLogoName(auth.currentUser.email[0]);
        setPersistence(auth, browserLocalPersistence);
        navigate("/home");
      }
    });
  }, [onAuthStateChanged]);
  return (
    <GlobalUser.Provider value={{ user, setUser, logoName, setLogoName }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Main />}></Route>
        </Routes>
      </div>
    </GlobalUser.Provider>
  );
}

export default App;
