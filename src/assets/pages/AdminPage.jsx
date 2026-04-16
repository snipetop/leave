import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom';
import './AdminPage.css';

const admin = {
  name: 'Admin User',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  role: 'Administrator'
};

function AdminPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar active="admin" />
      <div className="dashboard-main">
        <Topbar user={admin} title="Admin Dashboard" />
        <main className="dashboard-content">
          <Outlet context={{ admin }} />
        </main>
      </div>
    </div>
  );
}

export default AdminPage; 