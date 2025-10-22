import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "REFRIELECTRICOS - Servicios Profesionales en el Atlántico",
  description: "Servicios profesionales de refrigeración y electricidad en todo el Atlántico. Instalación, mantenimiento y reparación de aires acondicionados, sistemas eléctricos y más.",
  keywords: "refrigeración, electricidad, aire acondicionado, Atlántico, Barranquilla, Soledad, instalación, mantenimiento, reparación, colombia",
  authors: [{ name: "REFRIELECTRICOS", url: "https://refrielectricos.com" }],
  robots: "index, follow",
  openGraph: {
    title: "REFRIELECTRICOS",
    description: "Servicios profesionales de refrigeración y electricidad en todo el Atlántico",
    type: "website",
    locale: "es_CO",
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
