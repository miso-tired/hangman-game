// Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Game } from "./pages/Game";
import SignUpForm  from './users/SignUpForm'
import Home from "./Home";

function App() {
  return (
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/register' element={<SignUpForm />} />
      </Routes>
      </Router>
  )
}

export default App