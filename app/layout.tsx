import type { Metadata } from "next";
import "@/assets/css/global.scss";
import Header from "@/components/shared/Header/Header";
import { Manrope, Urbanist } from "next/font/google";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio App",
};
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
