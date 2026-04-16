import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './EmployeeProfile.css';
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaCalendarCheck, FaClock, FaTasks } from 'react-icons/fa';

const defaultEmployee = {
  employeeId: 'EMP-007',
  name: 'John Doe',
  role: 'Software Engineer',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  department: 'Technology',
  location: 'Building A, Room 101',
  avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  bio: "Passionate developer with a knack for creating elegant solutions."
};

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

function EmployeeProfile() {
  const { employee } = useOutletContext() || {};
  const [isEditing, setIsEditing] = useState(false);
  // Use defaultEmployee if employee is missing or empty
  const [profileData, setProfileData] = useState(
    employee && Object.keys(employee).length > 0 ? employee : defaultEmployee
  );

  useEffect(() => {
    if (employee && Object.keys(employee).length > 0) {
      setProfileData(employee);
    } else {
      setProfileData(defaultEmployee);
    }
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = (e) => {
    e.preventDefault();
    if (isEditing) {
      setProfileData(employee && Object.keys(employee).length > 0 ? employee : defaultEmployee);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (!profileData) {
    return <div className="loading-error">No employee profile data found. Please log in again.</div>;
  }

  // Dummy stats for the activity section
  const employeeStats = {
      attendance: 22,
      leavesTaken: 3,
      lastLogin: 'Today, 8:45 AM'
  };

  return (
    <div className="employee-profile-advanced-layout">
      {/* Left Column: Profile Summary */}
      <div className="profile-summary-card">
        <img src={profileData.avatar} alt="Employee Avatar" className="profile-avatar-large" />
        <h2 className="profile-name-large">{profileData.name}</h2>
        <p className="profile-role-large">{profileData.role}</p>
        <button className="profile-edit-btn" onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
        <p className="profile-bio-employee">{profileData.bio}</p>
      </div>

      {/* Right Column: Details and Activity */}
      <div className="profile-details-section">
        <div className="details-card">
            <h3>Employee Details</h3>
            <form onSubmit={handleSave}>
              <div className="details-grid">
                  <DetailItem icon={<FaEnvelope />} label="Email" value={
                    isEditing ? <input type="email" name="email" value={profileData.email} onChange={handleInputChange} /> : profileData.email
                  } />
                  <DetailItem icon={<FaPhone />} label="Phone" value={
                    isEditing ? <input type="tel" name="phone" value={profileData.phone} onChange={handleInputChange} /> : profileData.phone
                  } />
                  <DetailItem icon={<FaBuilding />} label="Department" value={
                    isEditing ? <input type="text" name="department" value={profileData.department} onChange={handleInputChange} /> : profileData.department
                  } />
                  <DetailItem icon={<FaMapMarkerAlt />} label="Location" value={
                    isEditing ? <input type="text" name="location" value={profileData.location} onChange={handleInputChange} /> : profileData.location
                  } />
                  <DetailItem icon={<FaTasks />} label="Employee ID" value={profileData.employeeId} />
              </div>
              {isEditing && (
                <div className="form-actions">
                  <button type="submit" className="action-btn success-btn">Save Changes</button>
                </div>
              )}
            </form>
        </div>
        <div className="activity-card">
            <h3>Activity Overview</h3>
            <div className="activity-grid">
                <ActivityStat icon={<FaCalendarCheck />} count={employeeStats.attendance} label="Days Present" />
                <ActivityStat icon={<FaTasks />} count={employeeStats.leavesTaken} label="Leaves Taken" />
                <ActivityStat icon={<FaClock />} count={employeeStats.lastLogin} label="Last Login" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfile; 