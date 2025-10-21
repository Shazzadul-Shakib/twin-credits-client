import RegisterForm from "@/components/auth/register/register-form";
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
        <RegisterForm />

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
