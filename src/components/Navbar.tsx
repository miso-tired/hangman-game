import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

interface User {
  id: number;
  username: string;
  password: string;
}

interface NavbarProps {
  currentUser: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, onLogout }) => {

  // Logout logic
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
        {currentUser ? (
          <>
            <li><Link to={`/matches/${currentUser.id}`}>Matches</Link></li>
            <li className="user-greeting">Welcome, {currentUser.username}!</li>
            <li className="logout-link">
              <Link onClick={handleLogout} to={""}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        {!currentUser && <li><Link to="/register">Register</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;