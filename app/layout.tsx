import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFloating from "@/components/whatsapp-floating";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/icon.png", shortcut: "/icon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
