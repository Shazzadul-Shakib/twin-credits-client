"use client";

import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link
      className="from-primary to-secondary text-background inline-flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br px-4 py-2 text-sm font-medium"
      href={"/login"}
      onClick={() => console.log(`Login clicked`)}
    >
      Login
    </Link>
  );
};
