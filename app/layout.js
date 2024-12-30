// app/layout.js (RootLayout Component)

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

// Metadata API for managing head tags
export const metadata = {
  title: "Hemkanti - Skincare Clinics",
  description: "Visit Hemkanti Skin Care Clinic near Shivar Garden for HydraFacial, hair treatments, tattoo removal, skin brightening, laser hair reduction & more by Dr. Akanksha Kharote.",
  keywords: "hair coloring services near me, hair treatment clinic near me, skin clinic near me, HydraFacial near shivar garden, hair loss treatment near shivar garden, skin brightening services near me, tattoo removal near me, laser hair reduction near shivar garden, birth mark removal near me, melasma treatment near me, laser hair removal near shivar garden, skin discoloration near me, Korean glass skin in Pune, vampire facial in Pune, hair rebonding near me, skin care centre near me, Hemkanti, Hemkanti skincare clinics, Laser Therapy near shivar garden, Hair removal near shivar garden, Skin clinic near shivar garden,Dr.Akanksha Kharote, Akanksha Kharote, Dr.Kharote, Skin care specialist, Tattoo removal near shivar garden, Best Skin Specialist near shivar garden, skin care clinic near shivar garden,",
  author: "Hemkanti Clinics",
  robots: "index, follow", // Ensures search engines index the site and follow the links.
  openGraph: {
    title: "Hemkanti - Skincare Clinics",
    description: "Experience healing and glowing skin with our specialized skincare treatments.",
    image: "/images/home/high.jpg", // Add a proper Open Graph image
    url: "https://www.hemkanti.com", // Update with actual URL
    siteName: "Hemkanti Skincare Clinics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemkanti - Skincare Clinics",
    description: "Your skin deserves the best care. Discover our rejuvenating skincare services.",
    image: "/images/white-bg-hemkanti_mw.png", // Add a proper Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
