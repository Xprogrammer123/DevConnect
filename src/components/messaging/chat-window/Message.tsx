import React from 'react';

interface MessageProps {
  sender: { name: string; avatar?: string };
  content: string;
  timestamp: string;
  isOwn: boolean; // Determines alignment
}

export const Message: React.FC<MessageProps> = ({ sender, content, timestamp, isOwn }) => {
  return (
    <div
      className={`flex items-start gap-4 mb-4 ${
        isOwn ? 'flex-row-reverse text-right' : ''
      }`}
    >
      {sender.avatar && (
        <img
          src={sender.avatar}
          alt={`${sender.name}'s avatar`}
          className="h-10 w-10 rounded-full"
        />
      )}
      <div>
        <p
          className={`py-2 px-4 rounded-3xl shadow ${
            isOwn
              ? 'bg-gradient-to-br from-[#4A90E2] to-[#764BA2] text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {content}
        </p>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
    </div>
  );
};
