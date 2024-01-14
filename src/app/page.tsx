"use client";
import UnclickableWidget from "@/components/UnclickableWidget/UnclickableWidget";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <UnclickableWidget />
    </ThemeProvider>
  );
}
