import React, { useState, useEffect } from 'react';
import './EmployeeAttendance.css';
import { FaClock, FaCheck, FaTimes } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

const employeeAttendanceData = [
  { id: 1, name: 'John Doe', status: 'present', checkIn: '09:00 AM', checkOut: '06:00 PM' }
];

const EmployeeAttendance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [attendanceStatus, setAttendanceStatus] = useState('not-marked');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get user data from Outlet context
  const outletContext = useOutletContext();
  const user = outletContext?.user || { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' };

  // Debug logging
  console.log('EmployeeAttendance rendered');
  console.log('Outlet context:', outletContext);
  console.log('User data:', user);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    setAttendanceStatus('checked-in');
  };

  const handleCheckOut = () => {
    setAttendanceStatus('checked-out');
  };

  // For demo, filter by name
  const filteredData = employeeAttendanceData.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const total = filteredData.length;
  const present = filteredData.filter(e => e.status === 'present').length;
  const absent = filteredData.filter(e => e.status === 'absent').length;

  return (
    <div className="attendance-content-wrapper">
      <div className="profile-card-centered">
        <div className="attendance-header">
          <FaClock className="attendance-icon" />
          <h2>Daily Attendance</h2>
        </div>
        <div className="attendance-card">
          <div className="time-display">
            <h3>Current Time</h3>
            <div className="current-time" aria-live="polite">{currentTime.toLocaleTimeString()}</div>
          </div>
          <div className="attendance-actions">
            {attendanceStatus === 'not-marked' && (
              <button 
                className="check-in-btn" 
                onClick={handleCheckIn}
                aria-label="Check in for today's attendance"
              >
                <FaCheck /> Check In
              </button>
            )}
            {attendanceStatus === 'checked-in' && (
              <button 
                className="check-out-btn" 
                onClick={handleCheckOut}
                aria-label="Check out for today's attendance"
              >
                <FaTimes /> Check Out
              </button>
            )}
            {attendanceStatus === 'checked-out' && (
              <div className="attendance-complete" role="status" aria-live="polite">
                <FaCheck className="complete-icon" />
                <span>Attendance Complete</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance; 