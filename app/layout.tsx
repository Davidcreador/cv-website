import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helmut Pastor — Full Stack Developer",
  description: "Software Engineer with 8+ years of experience. Specializing in full-stack development with a unique blend of technical and creative skills.",
  keywords: ["Software Engineer", "Full Stack Developer", "Web Developer", "Graphic Designer", "React", "Node.js", "Costa Rica"],
  authors: [{ name: "Helmut Pastor" }],
  openGraph: {
    title: "Helmut Pastor — Full Stack Developer",
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
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
