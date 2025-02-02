import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, MoreVertical } from 'lucide-react';

interface ChatHeaderProps {
  name: string;
  avatar: string;
  status: string;
  onVideoCall: () => void;
  onVoiceCall: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  name,
  avatar,
  status,
  onVideoCall,
  onVoiceCall,
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-medium text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onVoiceCall}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
        >
          <Phone className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onVideoCall}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
        >
          <Video className="h-5 w-5" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
        >
          <MoreVertical className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};