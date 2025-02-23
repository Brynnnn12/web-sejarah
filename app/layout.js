import "./globals.css";
import { Inter } from "next/font/google";
import LoadingWrapper from "@/components/LoadingWrapper"; // Import wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sejarah Indonesia",
  description: "Website sejarah Indonesia dari masa ke masa",
};

function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LoadingWrapper>{children}</LoadingWrapper> {/* Tambahkan Wrapper */}
      </body>
    </html>
  );
}

export default RootLayout;
