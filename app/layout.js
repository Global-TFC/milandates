import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milan Dates - Premium Quality Dates Delivered Fresh",
  description: "Discover the world's finest dates including Medjool, Ajwa, and organic varieties. Handpicked from renowned farms, delivered fresh to your doorstep. Premium quality dates for every occasion.",
  keywords: "premium dates, medjool dates, ajwa dates, organic dates, chocolate covered dates, gift sets, luxury dates, fresh dates delivery",
  authors: [{ name: "Milan Dates" }],
  creator: "Milan Dates",
  publisher: "Milan Dates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://milandates.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Milan Dates - Premium Quality Dates Delivered Fresh",
    description: "Discover the world's finest dates including Medjool, Ajwa, and organic varieties. Handpicked from renowned farms, delivered fresh to your doorstep.",
    url: 'https://milandates.com',
    siteName: 'Milan Dates',
    images: [
      {
        url: '/hero1.png',
        width: 1200,
        height: 630,
        alt: 'Premium Quality Dates Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Milan Dates - Premium Quality Dates Delivered Fresh",
    description: "Discover the world's finest dates including Medjool, Ajwa, and organic varieties. Handpicked from renowned farms, delivered fresh to your doorstep.",
    images: ['/hero1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar whatsappNumber="917994779605" />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
