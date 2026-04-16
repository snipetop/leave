import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaClipboardList, FaUser, FaCog, FaSignOutAlt, FaClock, FaBars } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setOpen(false);
    // Optionally clear auth/session here
    navigate('/');
  };

  // Close sidebar on navigation (mobile)
  const handleNav = (to) => {
    setOpen(false);
    navigate(to);
  };

  // Handle overlay click
  const handleOverlay = () => setOpen(false);

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button className="sidebar-hamburger" aria-label="Open sidebar" onClick={() => setOpen(true)}>
        <FaBars />
      </button>
      {/* Overlay for mobile */}
      {open && <div className="sidebar-overlay" onClick={handleOverlay} tabIndex={0} aria-label="Close sidebar" role="button" />}
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div className="sidebar-logo">S.K TEXTILE</div>
        <nav className="sidebar-nav">
          {active === 'admin' ? (
            <>
              <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/admin')}><FaHome /> Dashboard</NavLink>
              <NavLink to="/admin/leaves" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/admin/leaves')}><FaClipboardList /> Leaves</NavLink>
              <NavLink to="/admin/attendance" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/admin/attendance')}><FaClock /> Attendance</NavLink>
              <NavLink to="/admin/profile" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/admin/profile')}><FaUser /> Profile</NavLink>
              <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/admin/settings')}><FaCog /> Settings</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/employee" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/employee')}><FaHome /> Dashboard</NavLink>
              <NavLink to="/employee/leave" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/employee/leave')}><FaClipboardList /> Leaves</NavLink>
              <NavLink to="/employee/attendance" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/employee/attendance')}><FaClock /> Attendance</NavLink>
              <NavLink to="/employee/profile" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/employee/profile')}><FaUser /> Profile</NavLink>
              <NavLink to="/employee/settings" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => handleNav('/employee/settings')}><FaCog /> Settings</NavLink>
            </>
          )}
          <a className="logout" href="#" onClick={handleLogout}><FaSignOutAlt /> Logout</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar; 