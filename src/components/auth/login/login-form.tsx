/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { loginSchema } from "@/schema/login-schema";
import { TLoginFormInputs } from "@/types/auth.type";
import { SubmitButton } from "../shared/submit-button";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/tanstack/api-services/auth-api";
import { queryClient } from "@/tanstack/query-client";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";
import { refreshUser } from "@/lib/refresh-user";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuthStore();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: authApi.loginUser,
    onSuccess: async () => {
      try {
        queryClient.clear();
        const userData = await authApi.loggedUser();
        setUser(userData.data);
        refreshUser();
        queryClient.setQueryData(["User"], userData);
        router.replace("/");
        toast.success("Login Successful");
      } catch (error) {
        console.error(error);
        toast.error("Failed to Login");
      }
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.data?.message || "Login unsuccessful");
    },
  });

  const onSubmit = async (data: TLoginFormInputs) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="abc@xyz.com"
          {...register("email")}
          className="ring-primary focus:ring-secondary mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-gray-600 shadow-sm ring-1 placeholder:text-xs focus:outline-none sm:text-sm"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-xs font-medium text-gray-600"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="xxxxxx"
            {...register("password")}
            className="ring-primary focus:ring-secondary mt-1 block w-full rounded-md border-gray-300 px-3 py-2 pr-10 text-gray-600 shadow-sm ring-1 placeholder:text-xs focus:outline-none sm:text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      <SubmitButton isSubmitting={isLoading} text="Login" />
    </form>
  );
}
