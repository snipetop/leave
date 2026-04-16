import React, { useState, useEffect } from 'react';
import './EmployeeAttendance.css';
import { FaClock, FaCheck, FaTimes, FaSpinner } from 'react-icons/fa';

const EmployeeAttendance = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [attendanceStatus, setAttendanceStatus] = useState('not-marked'); // not-marked, checked-in, checked-out
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleCheckIn = () => {
        const now = new Date();
        setCheckInTime(now);
        setAttendanceStatus('checked-in');
        setError(null);
    };

    const handleCheckOut = () => {
        const now = new Date();
        setCheckOutTime(now);
        setAttendanceStatus('checked-out');
        setError(null);
    };

    const renderTime = (time) => time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';

    return (
        <div className="flex-grow flex justify-center items-center bg-gray-100 p-4">
            <div className="attendance-card-wrapper">
                <div className="header-section">
                    <FaClock className="header-icon" />
                    <h1 className="header-title">Daily Attendance</h1>
                    <p className="header-subtitle">Mark your daily attendance</p>
                </div>

                <div className="time-display-wrapper">
                    <p className="time-display-label">Current Time</p>
                    <div className="current-time" aria-live="polite">
                        {currentTime.toLocaleTimeString()}
                    </div>
                </div>

                {error && <p className="status-message error">{error}</p>}

                <div className="check-in-out-grid">
                    <div className="time-box check-in">
                        <p className="time-box-label">Check-in Time</p>
                        <p className="time-box-time">{renderTime(checkInTime)}</p>
                    </div>
                    <div className="time-box check-out">
                        <p className="time-box-label">Check-out Time</p>
                        <p className="time-box-time">{renderTime(checkOutTime)}</p>
                    </div>
                </div>

                <div>
                    {attendanceStatus === 'not-marked' && (
                        <button
                            onClick={handleCheckIn}
                            className="action-button check-in-btn"
                        >
                            <FaCheck /> Check In
                        </button>
                    )}

                    {attendanceStatus === 'checked-in' && (
                        <button
                            onClick={handleCheckOut}
                            className="action-button check-out-btn"
                        >
                            <FaTimes /> Check Out
                        </button>
                    )}

                    {attendanceStatus === 'checked-out' && (
                        <div className="status-message complete">
                            Attendance marked for today.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployeeAttendance; 