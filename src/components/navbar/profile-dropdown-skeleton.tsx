export const ProfileDropdownSkeleton = () => {
  return (
    <div className="hover:bg-primary/10 ring-primary flex animate-pulse cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ring-2 focus:outline-none">
      <div className="bg-primary/30 h-5 w-5 rounded-full" />
      <div className="bg-primary/30 h-4 w-4" />
    </div>
  );
};
