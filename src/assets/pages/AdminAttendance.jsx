import React, { useState } from 'react';
import './AdminAttendance.css';
import { FaCheckCircle, FaTimesCircle, FaUserEdit, FaInfoCircle } from 'react-icons/fa';
import Profile from '../components/Profile';
import { useOutletContext } from 'react-router-dom';

const attendanceData = [
  { id: 1, name: 'John Doe', employeeId: 'EMP001', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'present' },
  { id: 2, name: 'Jane Smith', employeeId: 'EMP002', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', checkIn: '08:45 AM', checkOut: '05:30 PM', status: 'present' },
  { id: 3, name: 'Mike Johnson', employeeId: 'EMP003', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', checkIn: '09:15 AM', checkOut: '06:15 PM', status: 'present' },
  { id: 4, name: 'Sarah Wilson', employeeId: 'EMP004', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', checkIn: '--', checkOut: '--', status: 'absent' }
];

const statusInfo = {
  present: { text: 'Present', icon: <FaCheckCircle />, className: 'present' },
  absent: { text: 'Absent', icon: <FaTimesCircle />, className: 'absent' }
};

const AdminAttendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { admin } = useOutletContext() || {};

  const filteredData = attendanceData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = attendanceData.length;
  const present = attendanceData.filter(e => e.status === 'present').length;
  const absent = attendanceData.filter(e => e.status === 'absent').length;

  return (
    <div className="attendance-content-wrapper">
      <div className="profile-header-flex">
        <h1 className="profile-header">Attendance Management</h1>
        {admin && <Profile name={admin.name} role={admin.role} avatar={admin.avatar} />}
      </div>
      <div className="search-section">
        <input
          className="search-box"
          type="text"
          placeholder="Search employees by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="attendance-summary-row">
        <span>Total Employees: <b>{total}</b></span>
        <span>Present: <b>{present}</b></span>
        <span>Absent: <b>{absent}</b></span>
      </div>
      <div className="attendance-grid">
        {filteredData.map(employee => (
          <div className="attendance-card" key={employee.id}>
            <div className="attendance-card-header">
              <img src={employee.avatar} alt={`${employee.name}'s profile`} className="attendance-avatar" />
              <div>
                <div className="attendance-name">{employee.name}</div>
                <div className="attendance-id">{employee.employeeId}</div>
              </div>
            </div>
            <div className="attendance-info">
              <div>
                <p className="font-medium text-gray-500">Check In</p>
                <p className="font-semibold">{employee.checkIn}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Check Out</p>
                <p className="font-semibold">{employee.checkOut}</p>
              </div>
            </div>
            <div className="attendance-status-row">
              <span className={`attendance-status-badge ${statusInfo[employee.status].className}`}>
                {statusInfo[employee.status].icon} {statusInfo[employee.status].text}
              </span>
              <div>
                <button className="attendance-action-btn" title="Edit attendance">
                  <FaUserEdit />
                </button>
                <button className="attendance-action-btn" title="View details">
                  <FaInfoCircle />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer className="admin-attendance-footer">© 2024 Leave Management System</footer>
    </div>
  );
};

export default AdminAttendance; 