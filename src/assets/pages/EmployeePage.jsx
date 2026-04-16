import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import './EmployeePage.css';

const employeeNavLinks = [
    { name: 'Dashboard', path: '/employee/dashboard' },
    { name: 'My Leaves', path: '/employee/leaves' },
    { name: 'Attendance', path: '/employee/attendance' },
    { name: 'Profile', path: '/employee/profile' },
    { name: 'Settings', path: '/employee/settings' },
];

// Read employee data from localStorage if available
const employee = JSON.parse(localStorage.getItem('employeeData')) || {
    employeeId: 'EMP-007',
    name: 'John Doe',
    role: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    department: 'Technology',
    location: 'Building A, Room 101',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    bio: "Passionate developer with a knack for creating elegant solutions."
};

function EmployeePage() {
    return (
        <div className="employee-page-layout">
            <Sidebar navLinks={employeeNavLinks} />
            <div className="employee-main-content">
                <Topbar user={employee} />
                <div className="employee-page-content">
                    <Outlet context={{ employee }} />
                </div>
            </div>
        </div>
    );
}

export default EmployeePage; 