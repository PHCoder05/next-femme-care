"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import About from "../components/about";
import WhyChooseHemkanti from "../components/whychoose";
import Services from "../components/services";
import FaqTestimonials from "../components/testimonials";
import FloatingButtonWithModal from "../components/FloatingButton";
import NewArrivals from "../components/blog";
import Head from 'next/head';

function Home() {
  const slides = [
    {
      image: "/images/home/photo1.png",
      title: "Find Acne-Free and Fresh Radiance",
      description: "Discover tailored prices and skincare treatments near you for a radiant look.",
    },
    {
      image: "/images/home/photo2lady2.jpg",
      title: "Feel Young and Refreshed",
      description: "Explore aesthetic treatments and expert tips to rejuvenate your skin.",
    },
    {
      image: "/images/home/photo3.png",
      title: "Trusted Skincare for All",
      description: "Find the best and perfect products for all skin types to enhance your glow.",
    },
    {
      image: "/images/home/photo4.png",
      title: "Ideal Prices for Natural Glow",
      description: "Take advantage of special skincare deals and offers for beautiful and healthy skin.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Hemkanti</title>
        <meta 
          name="description" 
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more." 
        />
        <meta 
          name="keywords" 
          content="Hemkanti, Laser & Light Therapy, Hair removal"
        />
        <meta property="og:title" content="Best Skin Care & Hair Treatment Services Near Kokane Chowk" />
        <meta 
          property="og:description" 
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more."
        />
        <meta property="og:image" content="/images/services-banner.jpg" />
        <meta property="og:url" content="https://www.hemkanti.in/home" />
        <link rel="canonical" href="https://www.hemkanti.in/home" />
      </Head>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-cover"
                  onLoad={() => setIsLoading(false)}
                  style={{
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
                {/* Caption */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-8 animate-fade-up">
                  <h5 className="text-4xl sm:text-6xl font-bold mb-4 text-center animate-fade drop-shadow-lg">
                    {slide.title}
                  </h5>
                  <p className="text-lg sm:text-2xl text-center mb-8 max-w-2xl animate-fade delay-200 drop-shadow-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "bg-white scale-125" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Section Separators */}
        <div className="w-full bg-[#F9F2F0] py-8">
          <h2 className="text-center text-3xl font-bold text-[#6D4C41] tracking-wider">
            Welcome to Hemkanti Clinics
          </h2>
          <p className="text-center text-lg text-gray-600 mt-2">
            Your trusted skincare and wellness destination.
          </p>
          <p className="text-center text-lg text-gray-600 mt-2 italic font-semibold">
            “The story where beauty and medicine intersect”
          </p>
        </div>

        {/* Content Sections */}
        <div>
          <div className="animate-fade-up">
            <About />
          </div>
          <div className="animate-fade-up delay-200">
            <WhyChooseHemkanti />
          </div>
          <div className="animate-fade-up delay-400">
            <Services />
          </div>
          <div className="animate-fade-up delay-600">
            <FaqTestimonials />
          </div>
          <div className="animate-fade-up delay-1000">
            <NewArrivals />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
