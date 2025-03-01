import type { Metadata } from "next";
import "@/assets/css/global.scss";
import Header from "@/components/shared/Header/Header";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer/Footer";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { LoaderProvider } from "@/components/providers/LoaderProvider";

export const metadata: Metadata = {
  title: "Portfolio App",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <LoaderProvider>
          <ToastProvider>
            <>
              <Header />
              <main>{children}</main>
              <Footer />
            </>
          </ToastProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
