"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { ReactNode, useState } from "react";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Provider;
