import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

import { ModalProvider } from "@/components/common/modals";
import { Header, Footer } from "@/components/modules/layout";
import { getLinks } from "@/services";
import { UserLink } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of crazyproger1",
};

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  const response = await getLinks({ collections: "header,footer" });
  let links: UserLink[] = [];

  if (response.success) {
    links = response.results;
  }

  return (
    <html lang="en">
      <body className="container mx-auto px-8 md:px-16 lg:px-32">
        <ModalProvider>
          <Header links={links} />
          {children}
          <Footer links={links} />
        </ModalProvider>
      </body>
    </html>
  );
}
