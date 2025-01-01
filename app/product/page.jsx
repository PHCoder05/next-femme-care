import ProductCard from "../../components/productCard";
import SectionHeader from "../../components/SectionHeader";
import Head from 'next/head';

const Products = () => {
  const products = [
    {
      name: "Gentle Cleanser",
      description: "Boosts skin radiance and evens out tone.",
      image: "/images/Products/product8.jpg",
    },
    {
      name: "Exfoliating Scrub",
      description: "Gently removes dead skin for a smoother texture.",
      image: "/images/Products/product9.jpg",
    },
    {
      name: "Hydrating Moisturizer",
      description: "Deeply hydrates and nourishes for soft skin.",
      image: "/images/Products/product2.jpg",
    },
    {
      name: "Face Serum",
      description: "Shields skin from harmful UV rays all day.",
      image: "/images/Products/product6.jpg",
    },
    {
      name: "Sunscreen SPF 50",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/Products/product3.jpg",
    },
    {
      name: "Anti-Aging Cream",
      description: "Reduces fine lines and firms up the skin.",
      image: "/images/Products/product5.jpg",
    },
    {
      name: "Skin Toner",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/Products/product4.jpg",
    },
    {
      name: "Night Care",
      description: "Cleanses impurities while keeping skin soft.",
      image: "/images/Products/product7.jpg",
    },
  ];

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QJMTDGDNCL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QJMTDGDNCL');
            `,
          }}
        />
        <title>Products | Hemkanti</title>
        <meta
          name="description"
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more."
        />
        <meta
          name="keywords"
          content="Anti-Aging Cream, Natural skin care products, Conditioner"
        />
        <meta
          property="og:title"
          content="Best Skin Care & Hair Treatment Services Near Kokane Chowk"
        />
        <meta
          property="og:description"
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more."
        />
        <meta property="og:image" content="/images/home/Hemkanti.png" />
        <meta property="og:url" content="https://www.hemkanti.com/products" />
        <link rel="canonical" href="https://www.hemkanti.com/products" />
      </Head>

      <section className="bg-gradient-to-r from-[#FFF5F3] via-[#FEE9E5] to-[#FFF5F3] py-20 px-6 relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader
          title="Our Skincare Collection"
          subtitle="Explore our carefully curated range of skincare essentials, designed to nurture your skin naturally."
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
