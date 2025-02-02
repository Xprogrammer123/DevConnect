import React from 'react';

export const AdminFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600">
          © 2025 Admin Dashboard. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};