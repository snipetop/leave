import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './AdminProfile.css';
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaUsers, FaTasks, FaClock } from 'react-icons/fa';

function DetailItem({ icon, label, value }) {
    return (
        <div className="detail-item">
            <span className="label">{icon} {label}</span>
            <span className="value">{value}</span>
        </div>
    );
}

function ActivityStat({ count, label, icon }) {
    return (
        <div className="activity-stat">
            <p className="count">{count}</p>
            <p className="label">{icon} {label}</p>
        </div>
    );
}

function AdminProfile() {
  const { admin } = useOutletContext() || {};

  const currentAdmin = admin || {
    name: 'Admin User',
    role: 'Administrator',
    email: 'admin@example.com',
    phone: '+1 987 654 3210',
    department: 'Management',
    location: 'Head Office',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  };

  // Dummy stats for the activity section
  const adminStats = {
      managedUsers: 150,
      pendingApprovals: 5,
      lastLogin: 'Today, 9:15 AM'
  };

  return (
    <div className="admin-profile-advanced-layout">
      {/* Left Column */}
      <div className="profile-summary-card">
        <img src={currentAdmin.avatar} alt="Admin Profile" className="profile-avatar-large" />
        <h2 className="profile-name-large">{currentAdmin.name}</h2>
        <p className="profile-role-large">{currentAdmin.role}</p>
        <button className="profile-edit-btn">Edit Profile</button>
      </div>

      {/* Right Column */}
      <div className="profile-details-section">
        <div className="details-card">
            <h3>Admin Details</h3>
            <div className="details-grid">
                <DetailItem icon={<FaEnvelope />} label="Email" value={currentAdmin.email} />
                <DetailItem icon={<FaPhone />} label="Phone" value={currentAdmin.phone} />
                <DetailItem icon={<FaBuilding />} label="Department" value={currentAdmin.department} />
                <DetailItem icon={<FaMapMarkerAlt />} label="Location" value={currentAdmin.location} />
            </div>
        </div>
        <div className="activity-card">
            <h3>Activity Overview</h3>
            <div className="activity-grid">
                <ActivityStat icon={<FaUsers />} count={adminStats.managedUsers} label="Managed Users" />
                <ActivityStat icon={<FaTasks />} count={adminStats.pendingApprovals} label="Pending Approvals" />
                <ActivityStat icon={<FaClock />} count={adminStats.lastLogin} label="Last Login" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile; 