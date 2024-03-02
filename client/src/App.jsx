import Navbar from "./components/Nav/Navbar2";
import LoginForm from "./pages/LoginForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-white text-xl">Flix Vibes Coming Soon!</h1>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
