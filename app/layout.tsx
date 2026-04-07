import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroFin — Je Neurale Financiële AI Assistant",
  description: "De eerste neurale financiële AI assistant van Nederland. Quantum tax optimization, neural budgeting, autonomous investment agents.",
  keywords: ["neurofin", "ai", "finance", "neural", "quantum", "budgeting", "tax", "nederland"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}