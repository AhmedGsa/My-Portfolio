import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/common/MainHeader";

export const metadata: Metadata = {
  title: "Ahmed Gouasmia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
