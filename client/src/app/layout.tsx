import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeadroomWrapper from "@/components/layout/HeadroomWrapper";

export const metadata: Metadata = {
  title: "Crazyproger1's Portfolio Site",
  description: "Nikolay's (aka crazyproger1) portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark bg-primary">
        <HeadroomWrapper>
          <Header />
        </HeadroomWrapper>
        {children}
        <Footer />
      </body>
    </html>
  );
}
