import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import "./App.css";
import Navbar from "./components/navbar";
import Preferences from "./pages/preferences";

function App() {
  return (
    <div className=" flex justify-center flex-col w-screen h-screen px-5 py-5 sm:px-28">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
