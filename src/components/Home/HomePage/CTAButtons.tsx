import React from 'react';
import { ArrowRight, Code2, FileCode2 } from 'lucide-react';

export const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="group flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#4A90E2] px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
        <FileCode2 className="h-5 w-5" />
        Post a Project
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <button className="group flex items-center justify-center gap-2 bg-[#764BA2] hover:bg-[#8B5BB7] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
        <Code2 className="h-5 w-5" />
        Join as a Developer
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};