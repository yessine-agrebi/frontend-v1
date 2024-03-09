import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/utils/Providers";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "9arrini",
  description:
    "9arrini is a platform for students to find tutors and teachers for various subjects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
