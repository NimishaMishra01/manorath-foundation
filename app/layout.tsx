"use client"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Header } from "@/components/Header";

const theme = createTheme({
  palette: {
    primary: { main: "#1565c0" },
    secondary: { main: "#ff9800" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header/>
          <CssBaseline />
          <main>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
