// Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import { Game } from "./pages/Game";
import SignUpForm from "./users/SignUpForm";
import LoginForm from "./users/LoginForm";

function App() {
  return (
      <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/register' element={<SignUpForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
      </Router>
  )
}

export default App