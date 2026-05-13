import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NERTEC | Nertan Castro Assistência Técnica",
  description:
    "Assistência técnica em computadores e notebooks. Manutenção, formatação, remoção de vírus, instalação de programas, troca de peças e suporte técnico.",
  keywords: [
    "NERTEC",
    "Nertan Castro",
    "assistência técnica",
    "manutenção de computador",
    "manutenção de notebook",
    "formatação de computador",
    "remoção de vírus",
    "suporte técnico",
  ],
  openGraph: {
    title: "NERTEC | Nertan Castro Assistência Técnica",
    description:
      "Manutenção, formatação, remoção de vírus e suporte técnico para computadores e notebooks.",
    type: "website",
    locale: "pt_BR",
  },
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