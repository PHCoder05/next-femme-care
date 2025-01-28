// app/layout.js (RootLayout Component)
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

// Global SEO metadata
export const metadata = {
  title: "Hemkanti - Skincare Clinics", // Default site title
  description:
    "Visit Hemkanti Skin Care Clinic near Shivar Garden for HydraFacial, hair treatments, tattoo removal, skin brightening, laser hair reduction & more by Dr. Akanksha Kharote.",
  keywords:
    "hair coloring services near me, hair treatment clinic near me, skin clinic near me, HydraFacial near shivar garden, hair loss treatment near shivar garden, skin brightening services near me, tattoo removal near me, laser hair reduction near shivar garden, birth mark removal near me, melasma treatment near me, laser hair removal near shivar garden, skin discoloration near me, Korean glass skin in Pune, vampire facial in Pune, hair rebonding near me, skin care centre near me, Hemkanti, Hemkanti skincare clinics, Laser Therapy near shivar garden, Hair removal near shivar garden, Skin clinic near shivar garden, Dr.Akanksha Kharote, Akanksha Kharote, Dr.Kharote, Skin care specialist, Tattoo removal near shivar garden, Best Skin Specialist near shivar garden, skin care clinic near shivar garden",
  author: "Hemkanti Clinics",
  robots: "index, follow", // Ensures search engines index the site and follow the links.

  // Open Graph (for better sharing on social media)
  openGraph: {
    title: "Hemkanti - Skincare Clinics",
    description:
      "Experience healing and glowing skin with our specialized skincare treatments.",
    image: "/images/home/high.jpg", // Add a proper Open Graph image
    url: "https://www.hemkanti.com", // Update with actual URL
    siteName: "Hemkanti Skincare Clinics",
    type: "website",
  },
  
  // Twitter Card (For sharing on Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Hemkanti - Skincare Clinics",
    description:
      "Your skin deserves the best care. Discover our rejuvenating skincare services.",
    image: "/images/white-bg-hemkanti_mw.png", // Add a proper Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO and Favicon Links */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Meta Tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LF4PVQN5MR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LF4PVQN5MR');
            `,
          }}
        />

        <title>{metadata.title}</title>
      </head>
      <body className="bg-slate-100">
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
