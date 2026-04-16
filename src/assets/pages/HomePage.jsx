import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-bg">
      <nav className="home-navbar">
        <div className="home-logo">S.K TEXTILE</div>
        <div className="home-menu">
          <a href="/">Home</a>
          <a href="#" onClick={e => { e.preventDefault(); navigate('/about'); }}>About</a>
          <a href="#services">News</a>
          <a href="#" onClick={e => { e.preventDefault(); navigate('/contact'); }}>Contact</a>
          <button className="home-login-btn" onClick={() => navigate('/employee-login')}>Employee Login</button>
          <button className="home-login-btn primary" onClick={() => navigate('/admin-login')}>Admin Login</button>
        </div>
      </nav>
      <main className="home-main">
        <div className="home-card">
          <h1>Welcome to S.K TEXTILE</h1>
          <p className="home-subtitle">
           Leave Management System for Employees and Admins
          </p>
          <div className="home-actions">
            <button className="home-action-btn secondary" onClick={() => navigate('/employee-login')}>Employee Login</button>
            <button className="home-action-btn" onClick={() => navigate('/admin-login')}>Admin Login</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage; 