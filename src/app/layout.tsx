import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "mingcute_icon/font/Mingcute.css";
import { Toaster } from "@/components/ui/toaster";
import "react-cookie-manager/style.css";
import CookieConsentWrapper from "@/components/CookieConsentWrapper";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "200"] });

export const metadata: Metadata = {
  title: "Simple Revit",
  description: "Simple Revit",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`${poppins.className} antialiased`}>
        <CookieConsentWrapper>{children}</CookieConsentWrapper>
        <Toaster />
      </body>
    </html>
  );
}
