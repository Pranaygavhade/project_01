import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranay Gavhade | Developer Portfolio",
  description: "CSE (AI) Student | DSA Learner | Turning logic into solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
