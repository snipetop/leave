import React from 'react';
import './AdminProfile.css';

function AdminProfile({ name = 'Admin User', role = 'Administrator', avatar }) {
  return (
    <div className="admin-profile-summary">
      <img
        src={avatar || 'https://randomuser.me/api/portraits/women/44.jpg'}
        alt="Admin Avatar"
        className="admin-profile-avatar"
      />
      <div>
        <div className="admin-profile-name">{name}</div>
        <div className="admin-profile-role">{role}</div>
      </div>
    </div>
  );
}

export default AdminProfile; 