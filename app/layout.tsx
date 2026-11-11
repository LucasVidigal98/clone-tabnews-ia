import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Em construção | Tabnews-ia",
  description: "Construindo o Tabnews-ia.",
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
