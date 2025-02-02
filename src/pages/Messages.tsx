import React from 'react';
import { ChatWindow } from '../components/messaging/chat-window/ChatWindow';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';
import { ChatList } from '../components/messaging/chat-list/ChatList';
export const Messages = () => {
  const [activeChat, setActiveChat] = React.useState<string | null>(null);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        notifications={[]}
        userName="David Chen"
        userImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar userType="developer" />
        <main className="flex-1 p-2  overflow-y-auto h-[100vh]">
          <ChatList 
            activeChat={activeChat}
            onChatSelect={setActiveChat}
            className="w-80 border-r border-gray-200"
          />
          {activeChat ? (
            <ChatWindow chatId={activeChat} />
          ) : (
           <p></p>
          )}
        </main>
      </div>
    </div>
  );
};