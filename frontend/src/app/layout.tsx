import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

import { Header, Footer } from "@/components/modules/layout";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of crazyproger1",
};

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className="container mx-auto px-32">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
