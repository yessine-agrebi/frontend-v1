import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@/utils/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TutorZone",
  description: "TutorZone is a platform for students to find tutors and for tutors to find students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        {children}
        </Provider>
        </body>
    </html>
  );
}
