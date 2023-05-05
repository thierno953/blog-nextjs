import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
