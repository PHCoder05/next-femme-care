// app/layout.js (RootLayout Component)

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

// Metadata API for managing head tags
export const metadata = {
  title: "Hemkanti - Skincare Clinics",
  description: "Heal and Glow with our skincare clinics services. Offering personalized skincare solutions for a radiant glow.",
  keywords: "skincare, clinics, beauty, skin treatments, skincare services, health, beauty clinics, glowing skin",
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
