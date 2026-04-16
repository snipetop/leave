import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from '../assets/pages/AdminPage';
import AdminProfile from '../assets/pages/AdminProfile';
import AdminLeavesPage from '../assets/pages/AdminLeavesPage';
import AdminAttendance from '../assets/pages/AdminAttendance';
import AdminDashboardContent from '../assets/components/AdminDashboardContent';
import AdminSettings from '../assets/pages/AdminSettings';

export const adminRoutes = (
  <Route path="/admin" element={<AdminPage />}>
    <Route index element={<AdminDashboardContent />} />
    <Route path="profile" element={<AdminProfile />} />
    <Route path="leaves" element={<AdminLeavesPage />} />
    <Route path="attendance" element={<AdminAttendance />} />
    <Route path="settings" element={<AdminSettings />} />
  </Route>
); 