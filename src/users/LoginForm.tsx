import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <main>
      <h1>Login</h1>
      {errorMessage !== null && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              required
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </main>
  );
};

export default LoginForm;