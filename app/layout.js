// app/layout.js (RootLayout Component)

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

export const metadata = {
  title: "Hemkanti - Skincare Clinic",
  description: "Heal and Glow with our skincare clinic services. Offering personalized skincare solutions for a radiant glow.",
  keywords: "skincare, clinic, beauty, skin treatments, skincare services, health, beauty clinic, glowing skin",
  author: "Hemkanti Clinic",
  robots: "index, follow", // Ensures search engines index the site and follow the links.
  og: {
    title: "Hemkanti - Skincare Clinic",
    description: "Experience healing and glowing skin with our specialized skincare treatments.",
    image: "public/images/home/high.jpg", // Add a proper Open Graph image
    url: "https://www.hemkanti.com", // Update with actual URL
    site_name: "Hemkanti Skincare Clinic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemkanti - Skincare Clinic",
    description: "Your skin deserves the best care. Discover our rejuvenating skincare services.",
    image: "/images/white-bg-hemkanti_mw.png", // Add a proper Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Heal and Glow with our skincare clinic services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:site_name" content={metadata.og.site_name} />
        <meta property="og:type" content={metadata.og.type} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        
        {/* Robots meta tag */}
        <meta name="robots" content={metadata.robots} />
        
        {/* Structured Data (JSON-LD) for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Clinic",
              "name": "Hemkanti Skincare Clinic",
              "url": "https://www.hemkanti.com",
              "logo": "/images/white-bg-hemkanti_mw-removebg-preview.png", // Update with actual logo path
              "description": "A skincare clinic offering personalized treatments for healthy, glowing skin.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9405631363",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": "English",
              },
            }),
          }}
        />
      </head>
      <body className="bg-slate-100">
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
