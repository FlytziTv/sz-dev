import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const Perandory = localFont({
  src: "./assets/fonts/Perandory-Regular.otf",
  variable: "--font-perandory-variable",
});

export const metadata: Metadata = {
  title: "SZ-Dev",
  description: "Portfolio de Alexis De Jesus",
  icons: {
    icon: "/Slogo.svg", // <-- Ici
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          Perandory.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
