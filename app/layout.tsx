import ClientOnly from "@/components/ClientOnly";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Disney+",
  description: "Disney+ es el hogar de tus historias favoritas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
