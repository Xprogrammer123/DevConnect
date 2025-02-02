import React from "react";
import { LogOut } from "lucide-react";

export const LogoutButton: React.FC = () => (
  <button
    className="w-full flex items-center justify-center py-3 bg-red-50 text-red-600 font-semibold rounded-lg shadow hover:bg-red-100 transition"
    onClick={() => alert("Logged out!")}
  >
    <LogOut className="mr-2" />
    Logout
  </button>
);
