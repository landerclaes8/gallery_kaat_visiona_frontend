import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/notifications/styles.css";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/api";
import { theme } from "./lib/theme";

export const Providers = ({ children }: PropsWithChildren) => (
  <SWRConfig
    value={{
      fetcher,
    }}
  >
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  </SWRConfig>
);
