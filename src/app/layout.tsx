"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Kanit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./custom.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kanit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
