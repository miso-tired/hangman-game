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
      <ul className="list">
        <li className="home-link">
          <Link to="/">Home</Link>
        </li>
        <li className="game-link">
          <Link to="/game">Game</Link>
        </li>
        <li className="register-link">
          <Link to="/register">Register</Link>
        </li>
        {currentUser ? (
          <>
            <li className="matches-link">
              <Link to={`/matches/${currentUser.id}`}>Matches</Link>
            </li>
            <li className="logout-link">
              <Link onClick={handleLogout} to={""}>
                Logout
              </Link>
            </li>
            <li className="user-greeting">Hi, {currentUser.username}</li>
          </>
        ) : (
          <li className="login-link">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;