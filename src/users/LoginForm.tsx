import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

interface LoginFormProps {
  setCurrentUser: (user: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  // Login information
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Error message
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
  
    const data = await response.json();
  
    if (response.status === 200) {
      setCurrentUser(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      navigate("/");
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <div className="login-container">
    <div className="form-container">
      <div className="box">
        <h1 className="title">Login</h1>
        {errorMessage !== null && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
            placeholder="Username"
              type="text"
              required
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="input-field"
              id="username"
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="input-field"
              id="password"
              name="password"
            />
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
        <p className="text-center">
          Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
