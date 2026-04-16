import React, { useState } from 'react';
import './LeaveForm.css';
import { FaTimes } from 'react-icons/fa';

const LeaveForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    leaveType: 'Casual',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="leave-form-modal">
      <form className="leave-form" onSubmit={handleSubmit}>
        <button type="button" className="form-close-btn" onClick={onClose}><FaTimes /></button>
        <h2>Request a Leave</h2>
        <div className="form-row">
            <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="leaveType">Leave Type</label>
                <select className="form-select" id="leaveType" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
                    <option>Casual</option>
                    <option>Sick</option>
                    <option>Earned</option>
                </select>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group">
                <label className="form-label" htmlFor="startDate">Start Date</label>
                <input className="form-input" type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="endDate">End Date</label>
                <input className="form-input" type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required />
            </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="reason">Reason for Leave</label>
          <textarea className="form-textarea" id="reason" name="reason" value={formData.reason} onChange={handleChange} required />
        </div>
        <div className="form-actions">
          <button type="button" className="form-button secondary" onClick={onClose}>Cancel</button>
          <button type="submit" className="form-button primary">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
