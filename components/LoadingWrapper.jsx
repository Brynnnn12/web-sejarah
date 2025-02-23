"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // Simulasi loading 1.2 detik
    return () => clearTimeout(timer);
  }, [pathname]); // Aktif setiap kali halaman berubah

  return <>{loading ? <Loading /> : children}</>;
};

export default LoadingWrapper;
