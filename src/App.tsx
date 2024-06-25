// Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Game } from "./pages/Game";
import Home from "./Home";

function App() {
  return (
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
      </Router>
  )
}

export default App