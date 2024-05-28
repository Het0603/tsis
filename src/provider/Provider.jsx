import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import configureStore from "src/redux/configureStore";
import { queryClient } from "./QueryClient";
import { QueryGuard } from "./queryGuard";

const store = configureStore();

export function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <QueryGuard>{children}</QueryGuard>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
