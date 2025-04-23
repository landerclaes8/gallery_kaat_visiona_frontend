import { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { theme } from "./lib/theme";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/api";

export const Providers = ({ children }: PropsWithChildren) => (
  <SWRConfig
    value={{
      fetcher,
    }}
  >
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <BrowserRouter>
          <Notifications />
          {children}
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  </SWRConfig>
);
