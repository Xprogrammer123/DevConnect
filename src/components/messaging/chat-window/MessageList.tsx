import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { staggerChildren } from '../../animations/variants';

interface MessageListProps {
  chatId: string;
}

interface SenderInfo {
  name: string;
  avatar: string;
}

interface MessageType {
  id: number;
  content: string;
  timestamp: string;
  sender: SenderInfo;
  isOwn: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({ chatId }) => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 1,
      content: "Hey, how's the project coming along?",
      timestamp: "2:31 PM",
      sender: {
        name: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      isOwn: false,
    },
    {
      id: 2,
      content: "Making good progress! Just finished the main features.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
      sender: {
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      isOwn: true,
    },
  ]);

  const [currentChat, setCurrentChat] = useState<SenderInfo>({
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (messageContent: string) => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    const newMessage: MessageType = {
      id: messages.length + 1,
      content: messageContent,
      timestamp: formattedTime,
      sender: {
        name: currentChat.name,
        avatar: currentChat.avatar,
      },
      isOwn: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Function to handle chat selection and update sender profile
  const handleMessageReceived = (sender: SenderInfo, messageContent: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        content: messageContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
        sender,
        isOwn: false,
      },
    ]);

    setCurrentChat(sender); // Update the profile of the sender dynamically
  };

  return (
    <div className="flex flex-col h-full">
    
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="flex-1 overflow-y-auto p-4"
      >
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </motion.div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};
