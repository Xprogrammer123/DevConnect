import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { fadeIn } from '../animations/variants';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2] to-[#764BA2] flex items-center justify-center p-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-xl shadow-xl w-full max-w-md p-8"
      >
        <div className="flex flex-col items-center mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 mb-4"
          >
            <Code2 className="h-8 w-8 text-[#4A90E2]" />
            <span className="text-2xl font-bold text-gray-900">DevConnect</span>
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 text-center">{subtitle}</p>
        </div>
        {children}
      </motion.div>
    </div>
  );
};