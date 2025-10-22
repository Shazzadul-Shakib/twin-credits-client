import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/shared/nav-bar";
import { TanstackQueryProvider } from "@/tanstack/query-provider";
import { AuthProvider } from "@/components/provider/auth-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twin Credits",
  description: "Referral based credit system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background`}
      >
        <TanstackQueryProvider>
          <AuthProvider>
            <div>
              <NavBar />
              <div className="container mx-auto w-5xl py-8">{children}</div>
            </div>
            <Toaster position="top-right" />
          </AuthProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
