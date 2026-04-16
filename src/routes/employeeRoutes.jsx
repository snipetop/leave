import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import EmployeeDashboard from '../assets/pages/EmployeeDashboard';
import EmployeeProfile from '../assets/pages/EmployeeProfile';
import LeavePage from '../assets/pages/LeavePage';
import EmployeeAttendance from '../assets/pages/EmployeeAttendance';
import EmployeeSettings from '../assets/pages/EmployeeSettings';
import Sidebar from '../assets/components/Sidebar';
import Topbar from '../assets/components/Topbar';
import '../assets/pages/EmployeePage.css';

const EmployeeLayout = () => {
    // Dummy user data
    const user = {
        name: 'John Doe',
        role: 'Employee',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    };

    return (
        <div className="dashboard-layout">
            <Sidebar user={user} />
            <div className="dashboard-main">
                <Topbar user={user} />
                <main className="dashboard-content">
                    <Outlet context={{ user }} />
                </main>
            </div>
        </div>
    );
};

export const employeeRoutes = (
    <Route path="/employee" element={<EmployeeLayout />}>
        <Route index element={<EmployeeDashboard />} />
        <Route path="dashboard" element={<EmployeeDashboard />} />
        <Route path="profile" element={<EmployeeProfile />} />
        <Route path="leave" element={<LeavePage />} />
        <Route path="settings" element={<EmployeeSettings />} />
        <Route path="attendance" element={<EmployeeAttendance />} />
        </Route>
); 