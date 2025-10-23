export const RegisterFormSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Name field skeleton */}
      <div>
        <div className="mb-1 h-4 w-12 animate-pulse rounded bg-gray-200" />
        <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Email field skeleton */}
      <div>
        <div className="mb-1 h-4 w-12 animate-pulse rounded bg-gray-200" />
        <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
      </div>

      {/* Password field skeleton */}
      <div>
        <div className="mb-1 h-4 w-16 animate-pulse rounded bg-gray-200" />
        <div className="relative">
          <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Submit button skeleton */}
      <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
    </div>
  );
};
