import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "mingcute_icon/font/Mingcute.css";
import { Toaster } from "@/components/ui/toaster";
import "react-cookie-manager/style.css";
import CookieConsentWrapper from "@/components/CookieConsentWrapper";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

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
      <body className={`${openSans.className} antialiased`}>
        <CookieConsentWrapper>{children}</CookieConsentWrapper>
        <Toaster />
      </body>
    </html>
  );
}
