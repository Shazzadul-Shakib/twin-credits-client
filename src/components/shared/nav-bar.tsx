import { cn } from "@/lib/utils";
import { LoginButton } from "../navbar/login-button";

export const NavBar = () => {
  return (
    <nav
      className={cn(
        "bg-background flex w-full items-center justify-between px-4 py-2 shadow",
      )}
    >
      <div className="mx-auto flex w-[68rem] items-center justify-between">
        {/* Gradient text logo */}
        <div className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
          TwinCredits
        </div>

        {/* Login button */}
        <LoginButton />
      </div>
    </nav>
  );
};
