export const getTanstackQueryConfig =
  () => `import React, { PropsWithChildren, useMemo } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TanstackQueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: 0,
          retryOnMount: false,
          staleTime: 1000 * 60 * 60, // 1 hour
          gcTime: 1000 * 60 * 60, // 1 hour
        },
      },
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
`;
