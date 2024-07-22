import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import "./App.css";
import Navbar from "./components/navbar";
import Profile from "./pages/profile";

function App() {
  return (
    <div className=" flex justify-center flex-col w-screen h-screen px-5 py-5 sm:px-28">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
