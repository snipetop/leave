import React from 'react';
import './EmployeeProfile.css';

function EmployeeProfile({ name = 'Jane Doe', role = 'Employee', avatar }) {
  return (
    <div className="employee-profile-summary">
      <img
        src={avatar || 'https://randomuser.me/api/portraits/women/44.jpg'}
        alt="Employee Avatar"
        className="employee-profile-avatar"
      />
      <div>
        <div className="employee-profile-name">{name}</div>
        <div className="employee-profile-role">{role}</div>
      </div>
    </div>
  );
}

export default EmployeeProfile; 