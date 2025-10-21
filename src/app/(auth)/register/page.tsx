import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center p-4">
      {/* Register Card */}
      <div className="w-full max-w-sm rounded-xl shadow-2xl shadow-primary p-6">
        {/* Logo/Brand */}
        <div className="text-center mb-4">
          <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-1">
            Create your account
          </p>
        </div>

        {/* Register Fields */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700">
            Sign Up
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            Already have an account?{" "}
            <Link href={'/login'} className="font-medium text-indigo-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
