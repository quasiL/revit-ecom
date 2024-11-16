import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "mingcute_icon/font/Mingcute.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "200"] });

export const metadata: Metadata = {
  title: "Revit ecom",
  description: "Revit ecom",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
