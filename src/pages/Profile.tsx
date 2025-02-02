import React from 'react';
import { useLocation } from 'react-router-dom';
import { DeveloperProfile } from '../components/profile/developer/DeveloperProfile';
import { ClientProfile } from '../components/profile/client/ClientProfile';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';


export const Profile = () => {
  const location = useLocation();
  const isDeveloper = location.pathname.includes('/developer');
 

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        notifications={[]}
        userName={isDeveloper ? "David Chen" : "Alex Johnson"}
        userImage={isDeveloper 
          ? "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
      />
      <div className="flex">
      <Sidebar/>
        <main className=" h-[100vh] overflow-y-auto w-full">
        {isDeveloper ? <DeveloperProfile /> : <ClientProfile />}
        </main>
      </div>
    </div>
  );
};





