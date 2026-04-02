import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tappit | Your home, spotless - in a tap.",
    template: "%s | Tappit",
  },
  description:
    "Tappit connects you with verified home cleaning professionals in minutes. Book on-demand, scheduled, or recurring help.",
  metadataBase: new URL("https://tappit.in"),
  openGraph: {
    title: "Tappit",
    description: "Your home, spotless - in a tap.",
    type: "website",
  },
  icons: {
    icon: "/favicon0clean.png",
    shortcut: "/favicon0clean.png",
    apple: "/favicon0clean.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
