import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import styles from './layout.module.css'
import Menu from "@/components/global/Menu";
import Footer from "@/components/global/Footer";

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "MyCoins",
  description: "App for tracking your coins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <div className={styles.bodyStyle}>
          <Menu />
          <main className={styles.mainStyle}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
