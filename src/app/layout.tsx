import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import VisitorTracker from "@/components/analytics/VisitorTracker";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Ahmed Gouasmia",
  description: "Full-Stack Developer",
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
        <Footer />
        <VisitorTracker />
        <Analytics />
      </body>
    </html>
  );
}
