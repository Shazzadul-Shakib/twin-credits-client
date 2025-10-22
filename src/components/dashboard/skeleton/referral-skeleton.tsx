export const ReferralSkeleton: React.FC = () => (
  <div className="flex animate-pulse items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-gray-200"></div>
      <div>
        <div className="mb-2 h-4 w-32 rounded bg-gray-200"></div>
        <div className="h-3 w-24 rounded bg-gray-200"></div>
      </div>
    </div>
    <div className="h-6 w-20 rounded-full bg-gray-200"></div>
  </div>
);
