"use client";

import React from "react";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
