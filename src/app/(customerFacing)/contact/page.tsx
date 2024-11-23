import ContactForm from "../_components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact",
};

export default function Contact() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold py-6">Contact</h2>
      <ContactForm />
    </div>
  );
}
