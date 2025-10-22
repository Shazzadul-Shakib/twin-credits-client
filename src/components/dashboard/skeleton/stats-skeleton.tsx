export const StatsSkeletonCard = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
  </div>
);

const SkeletonCard = () => (
  <div className="rounded-lg bg-white p-6 shadow-lg animate-pulse">
    <div className="h-4 w-24 rounded bg-gray-200" />
    <div className="mt-2 h-8 w-16 rounded bg-gray-200" />
  </div>
);
