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
  title: "REFRIELECTRICOS ATLÁNTICO - Servicios de Refrigeración y Electricidad",
  description: "Servicios profesionales de refrigeración y electricidad en Barranquilla, Soledad y todo el Atlántico. Instalación, mantenimiento y reparación de aires acondicionados, sistemas eléctricos. ¡Llámanos ahora!",
  keywords: "refrigeración Barranquilla, electricidad Soledad, aire acondicionado Atlántico, instalación refrigeración, mantenimiento eléctrico, reparación aires acondicionados, técnicos refrigeración, electricistas Barranquilla, servicios eléctricos, refrigeración comercial",
  authors: [{ name: "REFRIELECTRICOS ATLÁNTICO", url: "https://refrielectricos.com" }],
  robots: "index, follow",
  openGraph: {
    title: "REFRIELECTRICOS ATLÁNTICO - Refrigeración y Electricidad",
    description: "Servicios profesionales de refrigeración y electricidad en Barranquilla, Soledad y todo el Atlántico. Instalación, mantenimiento y reparación.",
    type: "website",
    locale: "es_CO",
    siteName: "REFRIELECTRICOS ATLÁNTICO",
  },
  twitter: {
    card: "summary_large_image",
    title: "REFRIELECTRICOS ATLÁNTICO",
    description: "Servicios profesionales de refrigeración y electricidad en el Atlántico",
  },
  alternates: {
    canonical: "https://refrielectricos.com",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
        
        {/* Metadatos adicionales para SEO local */}
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla, Atlántico, Colombia" />
        <meta name="geo.position" content="10.9685;-74.7813" />
        <meta name="ICBM" content="10.9685, -74.7813" />
        
        {/* Información del negocio */}
        <meta name="business:contact_data:locality" content="Barranquilla" />
        <meta name="business:contact_data:region" content="Atlántico" />
        <meta name="business:contact_data:country_name" content="Colombia" />
        
        {/* Schema.org para negocio local */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "REFRIELECTRICOS ATLÁNTICO",
            "description": "Servicios profesionales de refrigeración y electricidad en Barranquilla, Soledad y todo el Atlántico",
            "url": "https://refrielectricos.com",
            "telephone": "+57-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barranquilla",
              "addressRegion": "Atlántico",
              "addressCountry": "CO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "10.9685",
              "longitude": "-74.7813"
            },
            "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "10.9685",
                "longitude": "-74.7813"
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Refrigeración y Electricidad",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalación de Aires Acondicionados"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mantenimiento de Sistemas Eléctricos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reparación de Refrigeración"
                  }
                }
              ]
            }
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
