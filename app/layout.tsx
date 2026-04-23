import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
