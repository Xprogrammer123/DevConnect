import React from 'react';
import { StatsCard } from '../shared/StatsCard';
import { Briefcase, CheckCircle, DollarSign, Star } from 'lucide-react';

export const ClientStats = () => {
  const stats = [
    { 
      icon: Briefcase,
      title: 'Active Projects',
      value: '12',
      trend: { value: 20, isPositive: true }
    },
    { 
      icon: CheckCircle,
      title: 'Completed Projects',
      value: '45',
      trend: { value: 15, isPositive: true }
    },
    { 
      icon: DollarSign,
      title: 'Total Spent',
      value: '$25,400',
      trend: { value: 10, isPositive: true }
    },
    { 
      icon: Star,
      title: 'Avg. Rating',
      value: '4.8',
      trend: { value: 5, isPositive: true }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};