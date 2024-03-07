import Navbar from "./components/Nav/Navbar";
import LoginForm2 from "./components/forms/test/LoginFormTest";
import Home from "./pages/Home";
import RegisterUser from "./components/forms/RegisterUser";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App pl-paddingGlobal pr-paddingGlobal pt-paddingGlobal pb-paddingGlobal">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-2" element={<LoginForm2 />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/your-spaces" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
