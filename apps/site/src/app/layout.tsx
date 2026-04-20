import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@harness/ui/dist/index.css";
import "./globals.css";
import { AiAssistant } from "@/components/AiAssistant";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Harness AI",
  description: "Practical AI systems for organizations that want results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <AiAssistant />
      </body>
    </html>
  );
}
