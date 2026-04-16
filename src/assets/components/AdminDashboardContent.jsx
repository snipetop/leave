import React, { useState, useEffect } from 'react';
import './AdminDashboardContent.css';
import Profile from './Profile';
import { useOutletContext } from 'react-router-dom';

const leaveApplications = [
  { id: 1, name: 'John Doe', type: 'Sick', start: '2024-06-10', end: '2024-06-12', reason: 'Fever', status: 'Pending' },
  { id: 2, name: 'Jane Smith', type: 'Casual', start: '2024-06-15', end: '2024-06-16', reason: 'Family event', status: 'Approved' },
  { id: 3, name: 'Alice Brown', type: 'Earned', start: '2024-06-20', end: '2024-06-22', reason: 'Vacation', status: 'Rejected' },
];

function AdminDashboardContent() {
  const [search, setSearch] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  // Get user data from Outlet context
  const outletContext = useOutletContext();
  const admin = outletContext?.admin || { name: 'Admin User', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' };

  // Debug logging
  console.log('AdminDashboardContent rendered');
  console.log('Outlet context:', outletContext);
  console.log('Admin data:', admin);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Statistics
  const total = leaveApplications.length;
  const pending = leaveApplications.filter(l => l.status === 'Pending').length;
  const approved = leaveApplications.filter(l => l.status === 'Approved').length;
  const rejected = leaveApplications.filter(l => l.status === 'Rejected').length;

  // Filtered applications
  const filtered = leaveApplications.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.type.toLowerCase().includes(search.toLowerCase())
  );

  const renderMobileCard = (leave) => (
    <div key={leave.id} className="mobile-leave-card">
      <div className="mobile-card-header">
        <h3>{leave.name}</h3>
        <span className={`mobile-status ${leave.status.toLowerCase()}`}>
          {leave.status}
        </span>
      </div>
      <div className="mobile-card-content">
        <div className="mobile-card-row">
          <span className="mobile-label">Type:</span>
          <span className="mobile-value">{leave.type}</span>
        </div>
        <div className="mobile-card-row">
          <span className="mobile-label">Start:</span>
          <span className="mobile-value">{leave.start}</span>
        </div>
        <div className="mobile-card-row">
          <span className="mobile-label">End:</span>
          <span className="mobile-value">{leave.end}</span>
        </div>
        <div className="mobile-card-row">
          <span className="mobile-label">Reason:</span>
          <span className="mobile-value">{leave.reason}</span>
        </div>
      </div>
      <div className="mobile-card-actions">
        <button
          className="approve-btn"
          disabled={leave.status !== 'Pending'}
        >
          Approve
        </button>
        <button
          className="reject-btn"
          disabled={leave.status !== 'Pending'}
        >
          Reject
        </button>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard-content">
      <div className="admin-dashboard-header-center">
        <div className="admin-dashboard-banner">Admin Dashboard</div>
        <div className="admin-dashboard-logo">S.K TEXTILE</div>
        <Profile name={admin.name} role="Administrator" avatar={admin.avatar} />
      </div>
      <div className="admin-stats-row">
        <div className="admin-stat-box total">Total<br /><span>{total}</span></div>
        <div className="admin-stat-box pending">Pending<br /><span>{pending}</span></div>
        <div className="admin-stat-box approved">Approved<br /><span>{approved}</span></div>
        <div className="admin-stat-box rejected">Rejected<br /><span>{rejected}</span></div>
      </div>
      
      <div className="admin-actions-row">
        <input
          className="admin-search"
          type="text"
          placeholder="Search by user name or leave type..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search leave applications by name or type"
        />
        <button className="admin-add-leave-btn" aria-label="Add new leave application">+ Add Leave</button>
      </div>
      
      <div className="admin-leave-table-section">
        {isMobile ? (
          <div className="mobile-leave-cards" role="list" aria-label="Leave applications">
            {filtered.map(renderMobileCard)}
          </div>
        ) : (
          <table className="admin-leave-table" role="table" aria-label="Leave applications">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Reason</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(leave => (
                <tr key={leave.id}>
                  <td>{leave.name}</td>
                  <td>{leave.type}</td>
                  <td>{leave.start}</td>
                  <td>{leave.end}</td>
                  <td>{leave.reason}</td>
                  <td className={leave.status.toLowerCase()} aria-label={`Status: ${leave.status}`}>{leave.status}</td>
                  <td>
                    <button
                      className="approve-btn"
                      disabled={leave.status !== 'Pending'}
                      aria-label={`Approve ${leave.name}'s leave application`}
                      title="Approve leave"
                    >Approve</button>
                    <button
                      className="reject-btn"
                      disabled={leave.status !== 'Pending'}
                      aria-label={`Reject ${leave.name}'s leave application`}
                      title="Reject leave"
                    >Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboardContent; 