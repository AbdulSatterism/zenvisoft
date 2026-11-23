import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zenvisoft. Send us a message and our technical leads will respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <ContactSection />
    </div>
  );
}
