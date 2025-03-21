import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Header, Footer } from "./components";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "900"],
});

export const metadata: Metadata = {
  title: "Front-end mentors - rest countries api",
  description: "challenge by Front-end mentors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        <Header />
        <main className="flex-1 py-8 px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
