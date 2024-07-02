// App.tsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import { Game } from './pages/Game';
import SignUpForm from './users/SignUpForm';
import LoginForm from './users/LoginForm';
import { CurrentUserProvider } from './contexts/CurrentUser';
import MatchesPage from './pages/MatchHistory';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);
  
  // Logout logic
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <CurrentUserProvider>
      <Router>
        <Navbar currentUser={currentUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm setCurrentUser={setCurrentUser} />} />
          <Route path="/matches/:userId" element={<MatchesPage />} />
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;