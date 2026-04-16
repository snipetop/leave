import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../assets/pages/HomePage';
import AdminLogin from '../assets/pages/AdminLogin';
import EmployeeLogin from '../assets/pages/EmployeeLogin';
import AboutPage from '../assets/pages/AboutPage';
import ContactPage from '../assets/pages/ContactPage';

export const publicRoutes = (
  <React.Fragment>
    <Route path="/" element={<HomePage />} />
    <Route path="/admin-login" element={<AdminLogin />} />
    <Route path="/employee-login" element={<EmployeeLogin />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </React.Fragment>
); 