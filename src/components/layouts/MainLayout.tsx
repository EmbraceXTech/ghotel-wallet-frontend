import React from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${inter.className} min-h-screen w-full flex flex-col justify-between bg-[#F8F8F8]`}
    >
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </main>
  );
}
