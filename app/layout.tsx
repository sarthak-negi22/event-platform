import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Effortlessly streamline event planning with our comprehensive event management platform",
  icons : {
    icon: '/assets/images/logo.svg'
  },
  metadataBase: new URL('https://evently-murex-three.vercel.app/'),
  openGraph: {
    images: '/opengraph-image.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
