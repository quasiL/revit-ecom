import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow bg-gray-900">{children}</main>
      <Footer />
    </div>
  );
}
