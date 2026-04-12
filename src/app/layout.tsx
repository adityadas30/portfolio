import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "../../public/fonts/geist.woff2",
  variable: "--font-geist",
});

const spaceGrotesk = localFont({
  src: "../../public/fonts/space-grotesk.woff2",
  variable: "--font-space",
});

const bitcount = localFont({
  src: "../../public/fonts/bitcount.woff2",
  variable: "--font-bitcount",
});

const saira = localFont({
  src: "../../public/fonts/saira-stencil.woff2",
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Aditya Das | Portfolio",
  description: "Artificial Intelligence @ Purdue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} ${bitcount.variable} ${saira.variable} font-sans antialiased bg-[#faf9f6] text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
