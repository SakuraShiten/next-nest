'use client'
import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "@repo/api/react-query";

function Providers({children}: { children: React.ReactNode }) {
    const [queryClient] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000,
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default Providers;