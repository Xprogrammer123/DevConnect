import React from 'react';
import { Briefcase, DollarSign, Star, Send } from 'lucide-react';
import { StatsCard } from '../shared/StatsCard';

interface DeveloperStatsProps {
  activeApplications: number;
  activeProjects: number;
  totalEarnings: string;
  rating: string;
  applicationsTrend?: {
    value: number;
    isPositive: boolean;
  };
}

export const DeveloperStats = ({
  activeApplications,
  activeProjects,
  totalEarnings,
  rating,
  applicationsTrend
}: DeveloperStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        icon={Briefcase}
        label="Active Applications"
        value={activeApplications}
        trend={applicationsTrend}
      />
      <StatsCard
        icon={Send}
        label="Projects in Progress"
        value={activeProjects}
      />
      <StatsCard
        icon={DollarSign}
        label="Total Earnings"
        value={totalEarnings}
      />
      <StatsCard
        icon={Star}
        label="Client Rating"
        value={rating}
      />
    </div>
  );
};