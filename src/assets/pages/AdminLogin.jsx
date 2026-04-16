import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fixed admin credentials
    if (username === 'admin' && password === 'admin123') {
      setError("");
      navigate("/admin");
    } else {
      setError("Invalid Admin ID or Password");
    }
  };

  return (
    <div className="login-viewport">
      <header className="login-header">
        <button className="login-back-btn" onClick={() => navigate('/')}>Back</button>
        S.K TEXTILE
      </header>
      <div className="admin-login-bg">
        <div className="admin-login-container">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Admin ID</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forgot-password-link">
              <span onClick={() => alert('Please contact IT to reset your password.')}>Forgot Password?</span>
            </div>
            {error && <div className="login-error">{error}</div>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <footer className="login-footer">© 2024 S.K TEXTILE. All rights reserved.</footer>
    </div>
  );
}

export default AdminLogin; 