"use client";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { CheckCheck, Copy } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { referralUrl } from "@/lib/config";

export const ReferralLinkCard = () => {
  const [copied, setCopied] = useState(false);
  const { user } = useAuthStore();
  
  const referralLink = `${referralUrl}?r=${user?.referralCode}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg bg-white p-6 shadow-2xl">
      <h3 className="text-lg font-semibold text-gray-900">
        Your Referral Link
      </h3>
      <p className="text-sm text-gray-600">
        Share this link with friends to earn 2 credits on first purchase.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <input
          value={referralLink}
          readOnly
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none"
        />
        <Button
          onClick={handleCopy}
          className={`transition-all duration-300 ${
            copied ? "bg-green-500 text-white" : ""
          }`}
        >
          {copied ? (
            <span className="jusc flex items-center gap-2">
              <CheckCheck className="h-4 w-4" />
              Copied!
            </span>
          ) : (
            <span className="jusc flex items-center gap-2">
              <Copy className="h-4 w-4" />
              Copy
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};
