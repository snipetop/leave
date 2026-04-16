import React, { useEffect, useState } from 'react';
import './AdminLeavesPage.css';
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query, doc, updateDoc } from 'firebase/firestore';

const LEAVE_TYPES = ['Sick', 'Casual', 'Earned'];
const LEAVE_QUOTA = 5;

function AdminLeavesPage() {
  const [leaves, setLeaves] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'leaves'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLeaves(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleStatusUpdate = async (leaveId, newStatus) => {
    try {
      const leaveRef = doc(db, 'leaves', leaveId);
      await updateDoc(leaveRef, { status: newStatus });
      setNotification(`Leave ${newStatus.toLowerCase()} successfully!`);
      setTimeout(() => setNotification(''), 2500);
    } catch (error) {
      setNotification('Failed to update status: ' + error.message);
      setTimeout(() => setNotification(''), 3500);
    }
  };

  // Calculate leave stats for each type (for all employees)
  const leaveTypeStats = LEAVE_TYPES.map(type => {
    const applied = leaves.filter(l => l.leaveType === type).length;
    return { type, quota: LEAVE_QUOTA, applied };
  });

  return (
    <div className="leave-content">
      {notification && <div className="admin-notification">{notification}</div>}
      <div className="leave-types-container">
        <h1 className="leave-title">Leave Summary (All Employees)</h1>
        <div className="leave-types-list">
          {leaveTypeStats.map(stat => (
            <div className="leave-type-card" key={stat.type}>
              <h2 className="leave-type-name">{stat.type} Leave</h2>
              <p className="leave-type-desc">
                Each employee can take <b>{stat.quota}</b> {stat.type.toLowerCase()} leaves per year.<br />
                {stat.applied} requests submitted for {stat.type.toLowerCase()} leave.
              </p>
            </div>
          ))}
        </div>
        <div className="leave-table-section">
          <h2 className="leave-table-title">All Leave Requests</h2>
          <table className="leave-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>Start</th>
                <th>End</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map(leave => (
                <tr key={leave.id}>
                  <td>{leave.name}</td>
                  <td>{leave.leaveType}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                  <td>
                    {leave.status === 'Pending' ? (
                      <>
                        <button
                          className="admin-action-btn approve"
                          onClick={() => handleStatusUpdate(leave.id, 'Approved')}
                        >
                          Approve
                        </button>
                        <button
                          className="admin-action-btn reject"
                          onClick={() => handleStatusUpdate(leave.id, 'Rejected')}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span>{leave.status}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminLeavesPage; 