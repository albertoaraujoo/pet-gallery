import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pet Gallery 😻",
  description: "Pet Gallery - A collection of adorable pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main className="min-h-screen p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
