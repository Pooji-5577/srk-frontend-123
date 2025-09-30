import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat", 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Radha Krishna Educational Society",
  description: "A non-profitable society established in 2014 with the main objective of supporting the innovative thoughts of students of various disciplines.",
  keywords: "education, society, non-profit, students, rural development, academic support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
