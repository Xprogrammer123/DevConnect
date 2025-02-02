import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
}

export const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};
