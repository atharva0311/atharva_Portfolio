import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Shinde — AI/ML Developer Portfolio",
  description:
    "Premium cinematic portfolio of Atharva Shashikant Shinde, Computer Engineering student, AI/ML Developer, Python Developer, research author, patent applicant, and product builder.",
  keywords: [
    "Atharva Shinde",
    "AI ML Developer",
    "Computer Engineering Portfolio",
    "Python Developer",
    "YOLOv8",
    "OpenCV",
    "Django Developer",
    "Machine Learning Portfolio",
  ],
  authors: [{ name: "Atharva Shashikant Shinde" }],
  openGraph: {
    title: "Atharva Shinde — AI/ML Developer Portfolio",
    description: "Building advanced AI & ML systems, scalable applications, and impactful products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
