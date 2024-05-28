import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Metadata } from "next";

export const metadata : Metadata = {
  title:'Evently',
  description : 'Effortlessly streamline event planning with our comprehensive event management platform',
  metadataBase: new URL('https://evently-murex-three.vercel.app/'),
  openGraph: {
    images: '/opengraph-image.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className = "flex h-screen flex-col">
      <Header />
      <main className = "flex-1">{children}</main>
      <Footer />
    </div>
  );
}
