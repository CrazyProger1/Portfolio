// eslint-disable-next-line import/order
import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { ReactNode } from "react";

import { ModalProvider } from "@/components/common/modals";
import { Header, Footer } from "@/components/modules/layout";
import { GOOGLE_ANALYTICS_ID } from "@/config";
import { getLinks } from "@/services";
import { UserLink } from "@/types";

// eslint-disable-next-line import/order
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of crazyproger1",
};

interface Props {
  children: ReactNode;
}

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default async function Layout({ children }: Props) {
  const response = await getLinks({ collections: "header,footer" });
  let links: UserLink[] = [];

  if (response.success) {
    links = response.results;
  }

  return (
    <html lang="en">
      <body className={`container mx-auto px-8 md:px-16 lg:px-32 ${poppins.className}`}>
        <ModalProvider>
          <Header links={links} />
          {children}
          <Footer links={links} />
        </ModalProvider>
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
