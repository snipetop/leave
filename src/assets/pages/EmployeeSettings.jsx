import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBell, FaCog } from 'react-icons/fa';
import './EmployeeSettings.css';

const TABS = [
  { key: 'account', label: 'Account', icon: <FaEnvelope /> },
  { key: 'notifications', label: 'Notifications', icon: <FaBell /> },
  { key: 'preferences', label: 'Preferences', icon: <FaCog /> },
];

function EmployeeSettings() {
  const [activeTab, setActiveTab] = useState('account');
  const [email, setEmail] = useState('employee@example.com');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(true);
  const [leaveAlerts, setLeaveAlerts] = useState(true);
  const [leaveReminders, setLeaveReminders] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved! (This is a demo)');
  };

  return (
    <div className="employee-settings-dashboard-bg">
      <div className="employee-settings-dashboard-card">
        <div className="employee-settings-dashboard-tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`employee-settings-dashboard-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
            >
              <span className="employee-settings-dashboard-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="employee-settings-dashboard-content">
          {activeTab === 'account' && (
            <form className="employee-settings-dashboard-form" onSubmit={handleSave}>
              <div>
                <h3 className="employee-settings-dashboard-section-title">Account Settings</h3>
                <p className="employee-settings-dashboard-section-desc">Update your login credentials.</p>
              </div>
              <label>
                Email Address
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                New Password
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                  autoComplete="new-password"
                />
              </label>
              <button type="submit" className="employee-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'notifications' && (
            <form className="employee-settings-dashboard-form" onSubmit={handleSave}>
              <div>
                <h3 className="employee-settings-dashboard-section-title">Notification Settings</h3>
                <p className="employee-settings-dashboard-section-desc">Control how you receive alerts.</p>
              </div>
              <label className="employee-settings-dashboard-switch-label">
                <span>Enable Email Notifications</span>
                <div className="employee-settings-dashboard-switch">
                  <input
                    type="checkbox"
                    checked={notification}
                    onChange={e => setNotification(e.target.checked)}
                  />
                  <span className="slider"></span>
                </div>
              </label>
              <button type="submit" className="employee-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'preferences' && (
            <form className="employee-settings-dashboard-form" onSubmit={handleSave}>
              <div>
                <h3 className="employee-settings-dashboard-section-title">Leave Preferences</h3>
                <p className="employee-settings-dashboard-section-desc">Customize your leave notifications.</p>
              </div>
               <label className="employee-settings-dashboard-switch-label">
                    <div>
                        <span>Leave Request Alerts</span>
                        <p className="employee-settings-dashboard-desc">Get notified when your leave is approved/rejected.</p>
                    </div>
                    <div className="employee-settings-dashboard-switch">
                        <input
                        type="checkbox"
                        checked={leaveAlerts}
                        onChange={() => setLeaveAlerts(!leaveAlerts)}
                        />
                        <span className="slider"></span>
                    </div>
                </label>
                 <label className="employee-settings-dashboard-switch-label">
                    <div>
                        <span>Upcoming Leave Reminders</span>
                        <p className="employee-settings-dashboard-desc">Receive reminders before your scheduled leaves.</p>
                    </div>
                    <div className="employee-settings-dashboard-switch">
                        <input
                        type="checkbox"
                        checked={leaveReminders}
                        onChange={() => setLeaveReminders(!leaveReminders)}
                        />
                        <span className="slider"></span>
                    </div>
                </label>
              <button type="submit" className="employee-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
        </div>
        <div className="employee-settings-dashboard-footer-info">
          Settings are saved per-session in this demo.
        </div>
      </div>
    </div>
  );
}

export default EmployeeSettings; 