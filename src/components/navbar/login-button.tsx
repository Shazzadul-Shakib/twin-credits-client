"use client";

import { Button } from "../ui/button";

export const LoginButton = () => {
  return (
    <Button  onClick={() => console.log(`Login clicked`)}>
      Login
    </Button>
  );
};
