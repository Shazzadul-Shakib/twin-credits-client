import { cn } from "@/lib/utils";
import { LoginButton } from "../navbar/login-button";

export const NavBar = () => {
  return (
    <nav
      className={cn(
        "w-full bg-background shadow px-4 py-2 flex items-center justify-between"
      )}
    >
      <div className=" w-[68rem] mx-auto flex items-center justify-between">
        {/* Gradient text logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          TwinCredits
        </div>

        {/* Login button */}
        <LoginButton />
      </div>
    </nav>
  );
};
