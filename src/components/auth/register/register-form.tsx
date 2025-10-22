"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { registerSchema } from "@/schema/register-schema";
import { TRegisterFormInputs } from "@/types/auth.type";
import { SubmitButton } from "../shared/submit-button";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/tanstack/api-services/auth-api";
import { toast } from "sonner";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const referralCodeFromUrl = searchParams.get("r");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TRegisterFormInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      referredCode: "",
    },
  });

  useEffect(() => {
    if (referralCodeFromUrl) {
      setValue("referredCode", referralCodeFromUrl);
    }
  }, [referralCodeFromUrl, setValue]);

  const { mutate: registerUser, isPending: isLoading } = useMutation({
    mutationFn: authApi.registerUser,
    onSuccess: async () => {
      try {
        router.replace("/login");
        toast.success("User created Successfully");
      } catch {
        toast.error("Failed to create user.");
      }
    },
    onError: () => {
      toast.error("User creation unsuccessful");
    },
  });

  const onSubmit = (data: TRegisterFormInputs) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium text-gray-600"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="ring-primary focus:ring-secondary mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-gray-600 shadow-sm ring-1 placeholder:text-xs focus:outline-none sm:text-sm"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

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

      <SubmitButton isSubmitting={isLoading} text="Register" />
    </form>
  );
}
