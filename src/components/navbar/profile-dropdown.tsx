"use client";
import { useEffect, useRef, useState } from "react";
import { User, LayoutDashboard, LogOut, ChevronDown } from "lucide-react";
import Link from "next/link";
import { IUser } from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/tanstack/api-services/auth-api";
import { useAuthStore } from "@/store/useAuthStore";
import { queryClient } from "@/tanstack/query-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ProfileDropdown: React.FC<{ user: IUser }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { clearUser } = useAuthStore();
  const dropdownRef = useRef(null);
  const router = useRouter();
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const { mutate: logout } = useMutation({
    mutationFn: authApi.logoutUser,
    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["User"] });
      queryClient.removeQueries({ queryKey: ["User"] });
      clearUser();
      router.replace("/login");
      toast.success("Logged Out Successfully");
    },
    onError: () => {
      toast.error("Logout unsuccessful");
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="hover:bg-primary/10 ring-primary/70 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ring-2 focus:outline-none"
      >
        <User className="text-primary/70 h-5 w-5" />
        {isOpen ? (
          <ChevronDown className="text-primary/70 h-4 w-4 rotate-180 transform" />
        ) : (
          <ChevronDown className="text-primary/70 h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="ring-opacity-5 from-primary to-secondary ring-primary/20 absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gradient-to-b shadow-lg ring-1 focus:outline-none">
          <div className="border-b border-white/20 px-5 py-4 text-center">
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-sm text-white">{user.email}</p>
          </div>
          <ul className="py-1">
            <li>
              <Link
                href="/dashboard"
                className="hover:bg-primary/80 flex items-center gap-2 px-4 py-2 text-sm text-white"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => logout()}
                className="hover:bg-primary/80 flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-left text-sm text-white"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
