import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Articles />
      <Timeline />
      <Footer />
    </main>
  );
}
