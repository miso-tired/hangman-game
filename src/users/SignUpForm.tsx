import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/signupform.css';

interface User {
  username: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Form submission logic
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();

      if (response.status === 201) {
        data && setCurrentUser(data);
        // Redirect to home page after sign up
        navigate("/");
      } else {
        setErrorMessage(data.message);
      }
      console.log(data);
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Server Error. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <div className="box">
          <h1 className="title">Register</h1>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="input-field"
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">Register</button>
            </form>
          {currentUser && (
            <p>Welcome, {currentUser.username}! You have successfully registered.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
