import React, { useState, useEffect } from 'react';
import './LeavePage.css';
import LeaveForm from '../components/LeaveForm';
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const LEAVE_TYPES = ['Sick', 'Casual', 'Earned'];
const LEAVE_QUOTA = {
    'Sick': 10,
    'Casual': 5,
    'Earned': 5,
};

function LeavePage() {
  const [isLeaveFormOpen, setLeaveFormOpen] = useState(false);
  const [appliedLeaves, setAppliedLeaves] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const q = query(
          collection(db, 'leaves'),
          where('employeeId', '==', currentUser.uid),
          orderBy('createdAt', 'desc')
        );
        const unsubSnapshot = onSnapshot(q, (snapshot) => {
          setAppliedLeaves(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return () => unsubSnapshot();
      } else {
        setAppliedLeaves([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const leaveTypeStats = LEAVE_TYPES.map(type => {
    const applied = appliedLeaves.filter(l => l.leaveType === type).length;
    return { type, quota: LEAVE_QUOTA[type], applied };
  });

  const pending = appliedLeaves.filter(l => l.status === 'Pending').length;
  const approved = appliedLeaves.filter(l => l.status === 'Approved').length;
  const rejected = appliedLeaves.filter(l => l.status === 'Rejected').length;

  const handleLeaveSubmit = async (formData) => {
    if (!user) {
        alert('You must be logged in to submit a leave request.');
        return;
    }
    try {
      await addDoc(collection(db, 'leaves'), {
        employeeId: user.uid,
        name: user.displayName || 'Unnamed Employee',
        leaveType: formData.leaveType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        reason: formData.reason,
        status: 'Pending',
        createdAt: serverTimestamp(),
      });
      setLeaveFormOpen(false);
    } catch (error) {
      alert('Failed to submit leave request: ' + error.message);
    }
  };

  return (
    <div className="leave-content">
      {isLeaveFormOpen ? (
        <LeaveForm onSubmit={handleLeaveSubmit} onClose={() => setLeaveFormOpen(false)} />
      ) : (
        <>
          <div className="leave-header">
            <h1 className="leave-title">Your Leave Dashboard</h1>
            <button 
              className="request-leave-btn"
              onClick={() => setLeaveFormOpen(true)}
            >
              Request Leave
            </button>
          </div>

          <div className="leave-types-list">
            {leaveTypeStats.map(stat => (
              <div className="leave-type-card" key={stat.type}>
                <h2 className="leave-type-name">{stat.type} Leave</h2>
                <p className="leave-type-desc">
                  You have used <b>{stat.applied}</b> out of <b>{stat.quota}</b> {stat.type.toLowerCase()} leaves.
                </p>
              </div>
            ))}
          </div>
          
          <div className="leave-table-section">
            <div className="leave-stats-row">
              <div className="leave-stats-card pending">Pending: <b>{pending}</b></div>
              <div className="leave-stats-card approved">Approved: <b>{approved}</b></div>
              <div className="leave-stats-card rejected">Rejected: <b>{rejected}</b></div>
            </div>
            <h2 className="table-title">Your Leave History</h2>
            <div style={{ overflowX: 'auto' }}>
                <table className="leave-table">
                <thead>
                    <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appliedLeaves.map(leave => (
                    <tr key={leave.id}>
                        <td>{leave.leaveType}</td>
                        <td>{leave.startDate}</td>
                        <td>{leave.endDate}</td>
                        <td>{leave.reason}</td>
                        <td>
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
        </>
      )}
    </div>
  );
}

export default LeavePage; 