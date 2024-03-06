import Navbar from "./components/Nav/Navbar";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App pl-paddingGlobal pr-paddingGlobal pt-paddingGlobal pb-paddingGlobal">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
