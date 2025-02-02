import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  pinned?: boolean;
  online?: boolean;
  isGroup?: boolean;
}

interface ChatListItemProps {
  chat: Chat;
  active: boolean;
  onClick: () => void;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({ chat, active, onClick }) => {
  // Check if chat is defined and has the required properties
  const avatarSrc = chat?.avatar || '/default-avatar.png'; // Fallback to a default avatar
  const chatName = chat?.name || 'Unknown'; // Fallback to 'Unknown' if chat name is not available

  return (
    <motion.div
      whileHover={{ backgroundColor: '#f8fafc' }}
      onClick={onClick}
      className={`p-4 cursor-pointer border-b border-gray-100 ${
        active ? 'bg-[#4A90E2]/5' : ''
      }`}
    >
      <div className="flex items-center gap-3 ">
        <div className="relative">
          {/* Ensure chat.avatar is valid before attempting to display the image */}
          <img
            src={avatarSrc}
            alt={chatName}
            className="w-12 h-12 rounded-full object-cover"
          />
          {chat?.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900 truncate">{chatName}</h3>
            <span className="text-sm text-gray-500">{chat?.timestamp}</span>
          </div>
          
          <p className="text-sm text-gray-600 truncate">{chat?.lastMessage}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {chat?.pinned && (
            <Star className="h-4 w-4 text-[#4A90E2] fill-current" />
          )}
          {chat?.unread > 0 && (
            <span className="px-2 py-0.5 bg-[#4A90E2] text-white text-xs rounded-full">
              {chat?.unread}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
