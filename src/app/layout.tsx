import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playFairDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/PlayfairDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PlayfairDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/PlayfairDisplay-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-playfairdisplay",
});

export const metadata: Metadata = {
  title: "SEA Salon",
  description: "The best salon for your hair, nail, and skin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playFairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
