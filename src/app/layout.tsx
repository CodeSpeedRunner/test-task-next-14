import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/globals.css";
import React, { Suspense } from "react";
import Loader from "@/shared/ui/loading";
import { Header } from "@/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test task"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-black pt-[310px] lg:pt-[180px]">
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
