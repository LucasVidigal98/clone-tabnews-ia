import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clone TabNews IA",
  description: "Projeto de estudo com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
