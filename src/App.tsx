import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Index } from './pages/Index';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Messages } from './pages/Messages';
import { Profile } from './pages/Profile';
import { BrowseProjects } from './pages/BrowseProjects';
import { PostProject } from './pages/PostProject';
import { Payments } from './pages/Payments';
import { Settings } from './pages/Settings';
import { UpdateSettings } from './pages/UpdateSettings';
import { AdminDashboard } from './pages/AdminDashboard';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute><BrowseProjects /></ProtectedRoute>} />
        <Route path="/post" element={<ProtectedRoute><PostProject /></ProtectedRoute>} />
        <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/updatesettings" element={<ProtectedRoute><UpdateSettings /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}