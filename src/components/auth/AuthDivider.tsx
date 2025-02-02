import React from 'react';
import { motion } from 'framer-motion';

export const AuthDivider = () => {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200" />
      </div>
      <div className="relative flex justify-center text-sm">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-2 bg-white text-gray-500"
        >
          Or continue with
        </motion.span>
      </div>
    </div>
  );
};