import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Menu from "./components/menu";
import "./globals.css";
import {GlobalProvider} from "./context/GlobalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Menu />
        <Component {...pageProps} />
      </div>
    </GlobalProvider>
  );
}
