import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './EmployeeDashboard.css';
import { FaArrowRight, FaCalendarCheck, FaClock } from 'react-icons/fa';

function StatCard({ title, count, icon }) {
    return (
        <div className="summary-card">
            <div className="summary-card-icon">{icon}</div>
            <h3>{title}</h3>
            <p className="count">{count}</p>
        </div>
    );
}

function ActivityItem({ icon, text, timestamp }) {
    return (
        <div className="activity-item">
            <div className="activity-icon">{icon}</div>
            <div className="activity-details">
                <p>{text}</p>
                <span className="timestamp">{timestamp}</span>
            </div>
        </div>
    );
}

function EmployeeDashboard() {
  const { employee } = useOutletContext() || {};

  // Demo data for summary cards
  const leaveData = {
      available: 10,
      used: 5,
      pending: 1,
  };

  const summaryCards = [
    { title: 'Available Leaves', count: leaveData.available, icon: <FaCalendarCheck /> },
    { title: 'Leaves Taken', count: leaveData.used, icon: <FaArrowRight /> },
    { title: 'Pending Requests', count: leaveData.pending, icon: <FaClock /> },
  ];

  const recentActivities = [
      { icon: <FaCalendarCheck />, text: 'Your sick leave was approved.', timestamp: '2 days ago' },
      { icon: <FaClock />, text: 'You checked in at 9:02 AM.', timestamp: '3 days ago' },
      { icon: <FaArrowRight />, text: 'You submitted a casual leave request.', timestamp: '5 days ago' },
  ];

  return (
    <div className="dashboard-content">
        <h1 className="dashboard-welcome">Welcome, {employee?.name || 'Employee'}!</h1>

        <div className="leave-summary-grid">
            {summaryCards.map((card, idx) => (
                <StatCard key={idx} {...card} />
            ))}
        </div>

        <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div>
                {recentActivities.map((activity, index) => (
                    <ActivityItem key={index} {...activity} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default EmployeeDashboard; 