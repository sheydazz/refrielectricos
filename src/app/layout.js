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
  title: "Refri Electricos - Servicios Profesionales en Barranquilla",
  description: "Servicios profesionales de refrigeración y electricidad en Barranquilla. Instalación, mantenimiento y reparación de aires acondicionados, sistemas eléctricos y más.",
  keywords: "refrigeración, electricidad, aire acondicionado, Barranquilla, instalación, mantenimiento, reparación, barranquilla, colombia",
  authors: [{ name: "RefriElectricos", url: "https://refrielectricos.com" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "Refirelectricos",
    description: "Servicios profesionales de refrigeración y electricidad en Barranquilla",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
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
