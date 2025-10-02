import { Geist, Geist_Mono, Oswald, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ['400', '700'],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: 'Nateify',
  description: 'Nate Sasapan - Software Developer Portfolio',
  openGraph: {
    title: 'Nateify',
    description: 'Nate Sasapan - Software Developer Portfolio',
    images: ['https://natesasapan.me/N.png'],
    url: 'https://natesasapan.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nateify',
    description: 'Nate Sasapan - Software Developer Portfolio',
    images: ['https://natesasapan.me//N.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
