import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import { adminRoutes } from './routes/adminRoutes';
import { employeeRoutes } from './routes/employeeRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {publicRoutes}
        
        {/* Admin Routes */}
        {adminRoutes}
        
        {/* Employee Routes */}
        {employeeRoutes}
        
        {/* Redirect old routes to new shorter structure */}
        <Route path="/admin-dashboard/*" element={<Navigate to="/admin" replace />} />
        <Route path="/employee-dashboard/*" element={<Navigate to="/employee" replace />} />
        <Route path="/admin-profile" element={<Navigate to="/admin/profile" replace />} />
        <Route path="/admin-settings" element={<Navigate to="/admin/settings" replace />} />
        <Route path="/admin-leaves" element={<Navigate to="/admin/leaves" replace />} />
        <Route path="/admin-attendance" element={<Navigate to="/admin/attendance" replace />} />
        <Route path="/employee-profile" element={<Navigate to="/employee/profile" replace />} />
        <Route path="/employee-settings" element={<Navigate to="/employee/settings" replace />} />
        <Route path="/employee-leaves" element={<Navigate to="/employee/leaves" replace />} />
        <Route path="/employee-attendance" element={<Navigate to="/employee/attendance" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;