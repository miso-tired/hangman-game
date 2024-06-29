import React from "react"
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
      <nav>
        <ul className="list">
          <li className='home-link'><Link to="/">Home</Link></li>
          <li className='game-link'><Link to="/game">Game</Link></li>
          <li className='login-link'><Link to='/login'>Login</Link></li>
          <li className='register-link'><Link to='/register'>Register</Link></li>
        </ul>
      </nav>
    );
  };  

export default Navbar