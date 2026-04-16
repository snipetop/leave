import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaBell, FaClipboardCheck } from 'react-icons/fa';
import './AdminSettings.css';

const TABS = [
  { key: 'account', label: 'Account', icon: <FaEnvelope /> },
  { key: 'notifications', label: 'Notifications', icon: <FaBell /> },
  { key: 'leave', label: 'Leave Policy', icon: <FaClipboardCheck /> },
];

function AdminSettings() {
  const [activeTab, setActiveTab] = useState('account');
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(true);
  const [autoApprove, setAutoApprove] = useState(true);
  const [requireDoc, setRequireDoc] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert('Settings saved! (This is a demo)');
  };

  return (
    <div className="admin-settings-dashboard-bg">
      <div className="admin-settings-dashboard-card">
        <div className="admin-settings-dashboard-tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              className={`admin-settings-dashboard-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
            >
              <span className="admin-settings-dashboard-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="admin-settings-dashboard-content">
          {activeTab === 'account' && (
            <form className="admin-settings-dashboard-form" onSubmit={handleSave}>
              <div>
                <h3 className="admin-settings-dashboard-section-title"><FaEnvelope /> Account</h3>
                <p className="admin-settings-dashboard-section-desc">Update your login credentials.</p>
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
              <button type="submit" className="admin-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'notifications' && (
            <form className="admin-settings-dashboard-form" onSubmit={handleSave}>
              <div>
                <h3 className="admin-settings-dashboard-section-title"><FaBell /> Notifications</h3>
                <p className="admin-settings-dashboard-section-desc">Control how you receive alerts.</p>
              </div>
              <label className="admin-settings-dashboard-switch-label">
                <span>Enable Email Notifications</span>
                <div className="admin-settings-dashboard-switch">
                  <input
                    type="checkbox"
                    checked={notification}
                    onChange={e => setNotification(e.target.checked)}
                  />
                   <span className="slider"></span>
                </div>
              </label>
              <button type="submit" className="admin-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
          {activeTab === 'leave' && (
            <form className="admin-settings-dashboard-form" onSubmit={handleSave}>
                <div>
                    <h3 className="admin-settings-dashboard-section-title"><FaClipboardCheck /> Leave Policy</h3>
                    <p className="admin-settings-dashboard-section-desc">Customize how leave requests are handled.</p>
                </div>
                <label className="admin-settings-dashboard-switch-label">
                    <div>
                        <span>Auto-Approve Short Leaves</span>
                        <p className="admin-settings-dashboard-desc">Automatically approve leaves with a duration of 2 days or less.</p>
                    </div>
                    <div className="admin-settings-dashboard-switch">
                        <input
                        type="checkbox"
                        checked={autoApprove}
                        onChange={() => setAutoApprove(!autoApprove)}
                        />
                        <span className="slider"></span>
                    </div>
                </label>
                 <label className="admin-settings-dashboard-switch-label">
                    <div>
                        <span>Require Documentation</span>
                        <p className="admin-settings-dashboard-desc">Require a document for sick leaves longer than 3 days.</p>
                    </div>
                    <div className="admin-settings-dashboard-switch">
                        <input
                        type="checkbox"
                        checked={requireDoc}
                        onChange={() => setRequireDoc(!requireDoc)}
                        />
                        <span className="slider"></span>
                    </div>
                </label>
              <button type="submit" className="admin-settings-dashboard-save-btn">Save Changes</button>
            </form>
          )}
        </div>
        <div className="admin-settings-dashboard-footer-info">
          Settings are saved per-session in this demo.
        </div>
      </div>
    </div>
  );
}

export default AdminSettings; 