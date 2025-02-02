import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { useAuth } from '../contexts/AuthContext';
import { Footer } from '../components/Home/footer/Footer';
import { Navigation } from '../components/Home/HomePage/Navigation';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userType, setUserType] = useState<'client' | 'developer'>('client');
  const { signUp, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(email, password, fullName, userType);
  };

  return (
    <>
      <Navigation />
      <AuthLayout
        title="Create an Account"
        subtitle="Join the largest developer-client network"
      >
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 relative">
              <input
                type="text"
                id="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                placeholder="Enter your full name"
                required
              />
              <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                placeholder="Enter your email"
                required
              />
              <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                placeholder="Create a password"
                required
              />
              <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              I am a
            </label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {[
                { label: 'Client', value: 'client' },
                { label: 'Developer', value: 'developer' }
              ].map((role) => (
                <motion.label
                  key={role.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex cursor-pointer rounded-lg border p-4 ${
                    userType === role.value
                      ? 'border-[#4A90E2] bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="userType"
                    value={role.value}
                    checked={userType === role.value}
                    onChange={(e) => setUserType(e.target.value as 'client' | 'developer')}
                    className="sr-only"
                  />
                  <span className="flex items-center gap-2">
                    <User className={`h-5 w-5 ${
                      userType === role.value ? 'text-[#4A90E2]' : 'text-gray-400'
                    }`} />
                    {role.label}
                  </span>
                </motion.label>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#4A90E2] text-white py-2 rounded-lg font-medium hover:bg-[#4A90E2]/90 transition-colors"
          >
            Create Account
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#4A90E2] hover:text-[#4A90E2]/80">
            Log in
          </Link>
        </p>
      </AuthLayout>
      <Footer />
    </>
  );
};