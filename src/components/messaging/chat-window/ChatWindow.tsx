import React from 'react';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

interface ChatWindowProps {
  chatId: string;
  chats: Array<{
    id: string;
    name: string;
    avatar: string;
    status: string;
    messages: string[];
  }>;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ chatId, chats }) => {
  // Find the selected chat data based on the chatId
  const chat = chats.find((chat) => chat.id === chatId);

  if (!chat) {
    return <p>Chat not found</p>; // Error handling if chat is not found
  }

  const handleSendMessage = (message: string) => {
    alert('Sending message:', message);
  };

  const handleVoiceCall = () => {
    alert('Starting voice call');
  };

  const handleVideoCall = () => {
    alert('Starting video call');
  };

  return (
    <div className="flex-1 flex flex-col bg-white w-[90vh] h-full">
      <ChatHeader
        name={chat.name}
        avatar={chat.avatar}
        status={chat.status}
        onVoiceCall={handleVoiceCall}
        onVideoCall={handleVideoCall}
      />
      
      <MessageList chatId={chatId} messages={chat.messages} />
      
    
    </div>
  );
};
