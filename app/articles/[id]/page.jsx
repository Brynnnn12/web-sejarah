"use client";
import { useParams, notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Socials from "@/components/Socials";

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => String(a.id) === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <motion.article
        className="container mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }} // Lebih lambat dan halus
      >
        <div className="max-w-4xl mx-auto py-12">
          <motion.div
            className="relative w-full h-96 mb-4 xl:mb-8"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Efek fade-in lebih smooth
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className=" object-cover px-4 rounded-lg"
              priority
            />
          </motion.div>
          <motion.p
            className="text-gray-500 px-6 mb-2 xl:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} // Tambahkan delay agar lebih smooth
          >
            {article.date}
          </motion.p>
          <motion.h1
            className="text-2xl xl:text-4xl px-6 text-gray-800 font-bold mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }} // Judul muncul perlahan
          >
            {article.title}
          </motion.h1>
          <motion.div
            className="prose prose-lg px-4 max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }} // Delay untuk konten agar lebih natural
          >
            {article.content.split("\n\n").map((paragraph, idx) => (
              <motion.p
                key={idx}
                className="mb-4 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.3,
                  ease: "easeInOut",
                }} // Efek muncul satu per satu
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
          <div className=" mt-10 px-4 mb-8 xl:mb-0">
            <Socials
              containerStyles="flex text-sm xl:text-lg items-center gap-6"
              iconStyles="w-6 h-6 xl:w-9 xl:h-9 border border-black rounded-full flex justify-center items-center text-black text-base hover:bg-accent hover:text-primary transition-all duration-300"
            />
          </div>
        </div>
      </motion.article>

      <Footer />
    </div>
  );
}

export default ArticlePage;
