import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laat je klanten professionele portetfoto's maken met AI",
  description:
    "Blijf vooroplopen en laat je klanten AI portetfoto's genereren met de app van AI fotosessie, makkelijk geintegreerd in 1 week",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <Suspense> {children} </Suspense>
        <Footer />
      </body>
    </html>
  );
}
