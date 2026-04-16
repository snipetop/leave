import React, { useState } from 'react';
import './EmployeeDashboardContent.css';
import LeaveForm from './LeaveForm';

const LEAVE_TYPES = ['Sick', 'Casual', 'Earned'];
const LEAVE_QUOTA = 5;
const leaveApplications = [
  { id: 1, type: 'Sick', start: '2024-06-10', end: '2024-06-12', reason: 'Fever', status: 'Pending' },
  { id: 2, type: 'Casual', start: '2024-06-15', end: '2024-06-16', reason: 'Family event', status: 'Approved' },
  { id: 3, type: 'Earned', start: '2024-06-20', end: '2024-06-22', reason: 'Vacation', status: 'Rejected' },
];

function EmployeeDashboardContent() {
  const [isLeaveFormOpen, setLeaveFormOpen] = useState(false);
  
  const leaveTypeStats = LEAVE_TYPES.map(type => {
    const applied = leaveApplications.filter(l => l.type === type).length;
    return { type, quota: LEAVE_QUOTA, applied };
  });

  // Statistics
  const total = leaveApplications.length;
  const pending = leaveApplications.filter(l => l.status === 'Pending').length;
  const approved = leaveApplications.filter(l => l.status === 'Approved').length;
  const rejected = leaveApplications.filter(l => l.status === 'Rejected').length;

  return (
    <div className="employee-dashboard-content">
      {isLeaveFormOpen && <LeaveForm onClose={() => setLeaveFormOpen(false)} />}
      
      <div className="employee-stats-row">
        <div className="employee-stat-box total">Total Applied<br /><span>{total}</span></div>
        <div className="employee-stat-box pending">Pending<br /><span>{pending}</span></div>
        <div className="employee-stat-box approved">Approved<br /><span>{approved}</span></div>
        <div className="employee-stat-box rejected">Rejected<br /><span>{rejected}</span></div>
      </div>
      
      <div className="employee-actions-row">
        <button 
          className="employee-request-leave-btn"
          onClick={() => setLeaveFormOpen(true)}
        >
          Request a Leave
        </button>
      </div>
      
      <div className="employee-leave-table-section">
        <h2 className="table-title">Your Leave History</h2>
        <table className="employee-leave-table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Reason</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveApplications.map(leave => (
              <tr key={leave.id}>
                <td>{leave.type}</td>
                <td>{leave.start}</td>
                <td>{leave.end}</td>
                <td>{leave.reason}</td>
                <td className={leave.status.toLowerCase()}>
                  <span className={`status-badge ${leave.status.toLowerCase()}`}>
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeDashboardContent; 