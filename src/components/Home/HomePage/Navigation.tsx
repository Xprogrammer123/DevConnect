import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full backdrop-blur-sm bg-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           <Link to="/">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-white" />
            <span className="ml-2 text-white font-semibold text-xl">DevConnect</span>
          </div>
             </Link>
          {/* Links for larger screens */}
          
            <div className="flex items-center space-x-8">
              <Link to="/signup">
                  <button className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-xl border border-white">
        <Code2 className="h-5 w-5" />
        Join Now 
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
              </Link>
            </div>
      </div>
      </div>
    </nav>
  );
};
