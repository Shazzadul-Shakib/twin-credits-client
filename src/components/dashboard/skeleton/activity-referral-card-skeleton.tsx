// 7. Skeleton Loader Component
export const ReferralSkeleton: React.FC = () => (
  <div className="animate-pulse rounded-lg border border-gray-200 bg-gray-50 p-4">
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-gray-300"></div>
      <div className="flex-1">
        <div className="h-4 w-32 rounded bg-gray-300"></div>
        <div className="mt-2 h-3 w-24 rounded bg-gray-300"></div>
      </div>
      <div className="h-6 w-20 rounded-full bg-gray-300"></div>
    </div>
  </div>
);
