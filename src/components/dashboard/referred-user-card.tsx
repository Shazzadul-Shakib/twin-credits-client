import React from "react";

interface ReferreStatsCardProps {
  title: string;
  count: number;
}

export const ReferreStatsCard: React.FC<ReferreStatsCardProps> = ({
  title,
  count,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="text-xs font-semibold text-gray-900">{title}</h3>
      <p className="from-primary to-secondary mt-2 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
        {count}
      </p>
    </div>
  );
};
