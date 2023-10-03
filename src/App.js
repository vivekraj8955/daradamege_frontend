import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/signup" element={<Signup />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
