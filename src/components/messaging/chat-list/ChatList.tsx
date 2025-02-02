import React, { useState } from 'react';
import { ChatWindow } from '../chat-window/ChatWindow';

const chats = [
  {
    id: '1',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'Online',
    messages: ['Hello', 'How are you?'],
  },
  {
    id: '2',
    name: 'John Doe',
    avatar: 'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg',
    status: 'Offline',
    messages: ['Hey', 'What’s up?'],
  },
   {
    id: '3',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'Online',
    messages: ['Hello', 'How are you?'],
  },
  {
    id: '4',
    name: 'John Doe',
    avatar: 'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg',
    status: 'Offline',
    messages: ['Hey', 'What’s up?'],
  },
   {
    id: '5',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'Online',
    messages: ['Hello', 'How are you?'],
  },
  {
    id: '6',
    name: 'John Doe',
    avatar: 'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg',
    status: 'Offline',
    messages: ['Hey', 'What’s up?'],
  },
   {
    id: '7',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'Online',
    messages: ['Hello', 'How are you?'],
  },
  {
    id: '8',
    name: 'John Doe',
    avatar: 'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg',
    status: 'Offline',
    messages: ['Hey', 'What’s up?'],
  },
   {
    id: '9',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'Online',
    messages: ['Hello', 'How are you?'],
  },
  {
    id: '10',
    name: 'John Doe',
    avatar: 'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg',
    status: 'Offline',
    messages: ['Hey', 'What’s up?'],
  },
  // Add more chats here
];

export const ChatList = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [showChatList, setShowChatList] = useState(true); // Toggles between chat list and chat window on small screens

  const handleChatClick = (chatId: string) => {
    setSelectedChatId(chatId);
    setShowChatList(false); // Switch to chat window on selection
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-[100vh] overflow-y-auto">
      {/* Toggle Button (Visible on small screens) */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-200">
        <button
          onClick={() => setShowChatList(!showChatList)}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          {showChatList ? 'Open Chat' : 'Back to Chats'}
        </button>
      </div>

      {/* Chat List */}
      <div
        className={`${
          showChatList ? 'block' : 'hidden'
        } md:block w-[100vh] md:w-[40vh] bg-white shadow-lg md:border-r `}
      >
        <ul className="py-4">
          {chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className="cursor-pointer p-3 border-b hover:shadow-lg"
            >
              <div className="flex items-center">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <span className="block font-bold">{chat.name}</span>
                  <span className="text-gray-500 text-sm">
                    {chat.messages[chat.messages.length - 1]}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div
        className={`${
          !showChatList ? 'block' : 'hidden'
        } md:block bg-gray-50 w-full`}
      >
        {selectedChatId ? (
          <ChatWindow chatId={selectedChatId} chats={chats} className="h-[50vh]"/>
        ) : (
          <div className="flex items-center justify-center h-screen text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};
