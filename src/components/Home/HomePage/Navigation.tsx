import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';


export const Navigation = () => {
  const { user, signOut } = useAuth(); // Get user & signOut from AuthContext
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[70%] backdrop-blur-sm bg-white/10 rounded-full mt-5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-white" />
              <span className="ml-2 text-white font-semibold text-xl">DevConnect</span>
            </div>
          </Link>

          {/* Check if user is logged in */}
          {user ? (
            <div className="flex items-center space-x-6">
              {/* Show User Name */}
              <span className="text-white font-semibold">{user.user_metadata?.full_name || "User"}</span>

              {/* Dashboard Link */}
              <Link to="/dashboard">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold transition">
                  Dashboard
                </button>
              </Link>

              {/* Logout Button */}
              <button
                onClick={signOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            // If no user, show Sign Up button
            <Link to="/signup">
              <button className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition border border-white justify-end">
                <Code2 className="h-5 w-5" />
                Join Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
