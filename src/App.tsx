// Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Game } from "./components/Game";


function App() {
  return (
      <Router>
      <Routes>
        <Route path='/game' element={<Game />} />
      </Routes>
      </Router>
  )
}

export default App