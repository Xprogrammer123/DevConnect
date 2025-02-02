import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, Paperclip, Send, Mic } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSending(true);

    try {
      onSendMessage(message);
      setMessage('');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        {/* Emoji Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className="text-gray-500 hover:text-gray-600"
          title="Add emoji"
        >
          <Smile className="h-6 w-6" />
        </motion.button>

        {/* Attachment Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className="text-gray-500 hover:text-gray-600"
          title="Attach a file"
        >
          <Paperclip className="h-6 w-6" />
        </motion.button>

        {/* Message Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
          disabled={isSending}
        />

        {/* Send/Record Button */}
        {message.trim() ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className={`text-[#4A90E2] hover:text-[#4A90E2]/80 ${isSending ? 'opacity-50' : ''}`}
            disabled={isSending}
            title="Send message"
          >
            {isSending ? (
              <svg
                className="animate-spin h-6 w-6 text-[#4A90E2]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 11-8 8z"
                ></path>
              </svg>
            ) : (
              <Send className="h-6 w-6" />
            )}
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className={`text-gray-500 hover:text-gray-600 ${
              isRecording ? 'text-red-500' : ''
            }`}
            onClick={() => setIsRecording(!isRecording)}
            title="Start/Stop recording"
          >
            <Mic className="h-6 w-6" />
          </motion.button>
        )}
      </form>
    </div>
  );
};
