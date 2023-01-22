import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Loginpage/Login";
import Navbar from "./Pages/Navbar/Navbar";
import Profile from "./Pages/Profilepage/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
