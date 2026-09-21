import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REAL / ENGLISH — Language Lab",
  description: "Inglês real por chunks, memória adaptativa e progressão por domínio.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
