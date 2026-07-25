import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vitória Rabelo | Portfolio",
  description: "Desenvolvedora Back-End e Cientista de Dados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <CustomCursor />
        {children}
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}