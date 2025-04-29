import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/notifications/styles.css";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/api";
import { theme } from "./lib/theme";
import ScrollToTop from "./components/ScrollToTop";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <BrowserRouter>
            <ScrollToTop />
            {children}
          </BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
    </SWRConfig>
  );
};
