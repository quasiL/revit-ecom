import Footer from "@/components/Footer";
import ContactForm from "../_components/ContactForm";

export default function Contact() {
  return (
    <>
      <main className="container mx-auto">
        <h2 className="text-3xl font-bold py-6">Contact</h2>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
