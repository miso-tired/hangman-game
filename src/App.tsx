// Imports
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import { Game } from "./pages/Game";
import SignUpForm from "./users/SignUpForm";
import LoginForm from "./users/LoginForm";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Logout logic
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route
          path="/login"
          element={<LoginForm setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;