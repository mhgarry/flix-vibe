import Navbar from "./components/Nav/Navbar2";
import LoginForm from "./pages/LoginForm";
// import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
