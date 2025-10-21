import LoginForm from "@/components/auth/login/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[80dvh] items-center justify-center p-4">
      {/* Login Card */}
      <div className="shadow-primary w-full max-w-sm rounded-xl p-6 shadow-2xl">
        {/* Logo/Brand */}
        <div className="mb-4 text-center">
          <p className="from-primary to-secondary mt-1 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent">
            Sign in to continue
          </p>
        </div>

        {/* Login Fields */}
        <LoginForm />

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            No account?{" "}
            <Link
              href={"/register"}
              className="font-medium text-indigo-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
