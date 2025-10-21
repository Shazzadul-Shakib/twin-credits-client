import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[80dvh] items-center justify-center p-4">
      {/* Register Card */}
      <div className="shadow-primary w-full max-w-sm rounded-xl p-6 shadow-2xl">
        {/* Logo/Brand */}
        <div className="mb-4 text-center">
          <p className="from-primary to-secondary mt-1 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent">
            Create your account
          </p>
        </div>

        {/* Register Fields */}
        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <button className="w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Sign Up
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="font-medium text-indigo-600 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
