import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { ClerkProvider } from "@clerk/nextjs";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto px-4`}
        >
          <ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
