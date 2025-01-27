import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Linkshare",
  description: "Link sharing application for developers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#ebebeb]">
       <Header />
       <main >
         {children}
       </main>
      </body>
    </html>
  );
}
