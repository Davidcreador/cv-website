import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helmut Pastor - Full Stack Developer & Designer",
  description: "Software Engineer with 8+ years of experience. Specializing in full-stack development with a unique blend of technical and creative skills.",
  keywords: ["Software Engineer", "Full Stack Developer", "Web Developer", "Graphic Designer", "React", "Node.js", "Costa Rica"],
  authors: [{ name: "Helmut Pastor" }],
  openGraph: {
    title: "Helmut Pastor - Full Stack Developer & Designer",
    description: "Software Engineer with 8+ years of experience crafting digital experiences with code and creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
