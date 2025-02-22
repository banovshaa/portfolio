import type { Metadata } from "next";
import "@/assets/css/global.scss";
import Header from "@/components/shared/Header/Header";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio App",
};
// export const manrope: NextFont = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope",
//   display: "swap",
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

// export const urbanist = Urbanist({
//   subsets: ["latin"],
//   variable: "--font-urbanist",
//   display: "swap",
// });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
