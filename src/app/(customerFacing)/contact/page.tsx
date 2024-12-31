import ContactForm from "../_components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-6 ">
      <h2 className="text-3xl font-bold py-6 text-transparent bg-gradient-violet-pink bg-clip-text">
        Contact
      </h2>
      <ContactForm />
    </div>
  );
}
