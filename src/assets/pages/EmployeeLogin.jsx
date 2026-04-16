import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Import auth from your firebase config
import { signInWithEmailAndPassword } from "firebase/auth";
import "./EmployeeLogin.css";

function EmployeeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Hardcoded credentials for demo
    if (email === "employee@demo.com" && password === "employee123") {
      // Set demo employee data in localStorage
      localStorage.setItem("employeeData", JSON.stringify({
        employeeId: "EMP-007",
        name: "John Doe",
        role: "Software Engineer",
        email: "employee@demo.com",
        phone: "123-456-7890",
        department: "Technology",
        location: "Building A, Room 101",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        bio: "Passionate developer with a knack for creating elegant solutions."
      }));
      navigate("/employee");
      setLoading(false);
      return;
    }

    // Otherwise, try Firebase login
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/employee");
    } catch (err) {
      setError("Failed to log in. Please check your email and password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-viewport">
      <header className="login-header">
        <button className="login-back-btn" onClick={() => navigate('/')}>Back</button>
        S.K TEXTILE
      </header>
      <div className="employee-login-bg">
        <div className="employee-login-container">
          <h2>Employee Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
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
                autoComplete="current-password"
              />
            </div>
            <div className="forgot-password-link">
              <span onClick={() => alert('Please contact your administrator to reset your password.')}>Forgot Password?</span>
            </div>
            {error && <div className="login-error">{error}</div>}
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      <footer className="login-footer">© 2024 S.K TEXTILE. All rights reserved.</footer>
    </div>
  );
}

export default EmployeeLogin; 