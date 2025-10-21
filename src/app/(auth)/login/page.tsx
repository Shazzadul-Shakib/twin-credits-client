import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-sm rounded-xl shadow-2xl shadow-primary p-6">
        {/* Logo/Brand */}
        <div className="text-center mb-4">
          <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Login Fields */}
        <div className="space-y-3">
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

          <div className="flex items-center justify-between">
            <label className="flex items-center text-xs text-gray-600">
              <input type="checkbox" className="mr-1" />
              Remember
            </label>
            <button className="text-xs text-indigo-600 hover:underline">
              Forgot?
            </button>
          </div>

          <button className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700">
            Sign In
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            No account?{" "}
            <Link href={'/register'} className="font-medium text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
