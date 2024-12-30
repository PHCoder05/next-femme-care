"use client";
import React from 'react';
import Image from 'next/image';
import { GraduationCap, Stars } from 'lucide-react';
import Head from 'next/head';

const AboutUs = () => {
  const qualifications = [
    "MD in Homeopathy",
    "Post Graduate Diploma in Clinical Cosmetology",
    "Post Graduate Diploma in Trichology",
    "Post Graduate Diploma in Aesthetic Gaynacalogy"
  ];

  const achievements = [
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "150+", label: "Treatments" }
  ];

  return (

// SEO for About Us
    <>
    <Head>
        <title> About Us|Hemkanti</title>
        <meta 
          name="description" 
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more." 
        />
        <meta 
          name="keywords" 
          content="Dr.Akanksha Kharote, Akanksha Kharote, Dr.Kharote, Skin care specialist, Tattoo removal near shivar garden, Best Skin Specialist near shivar garden, skin care clinic near shivar garden"/>
        <meta property="og:title" content="Best Skin Care & Hair Treatment Services Near Kokane Chowk" />
        <meta 
          property="og:description" 
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more."
        />
        <meta property="og:image" content="/images/home/services/facial.jpg" />
        <meta property="og:url" content="https://www.hemkanti.com/about-us" />
        <link rel="canonical" href="https://www.hemkanti.com/about-us" />
      </Head>
    
    <section className="bg-gradient-to-r from-[#FFF5F3] via-[#FEE9E5] to-[#FFF5F3] py-20 px-6 relative overflow-hidden">
      {/* Decorative Elements */}


      {/* Main Header */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-6xl font-bold text-[#BF6159] glow-text mb-6">Welcome to Hemkanti Clinics</h2>
        <div className="w-24 h-1 bg-[#BF6159] mx-auto rounded-full shimmer-effect mb-6" />
      </div>

      {/* Doctor Profile Section */}
      <div className="relative z-10 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/image.png"
                  alt="Dr. Akanksha Kharote"
                  priority
                  width={288}
                  height={288}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-[#BF6159]" />
                  <span className="text-[#BF6159] font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-4xl font-semibold text-[#BF6159] mb-4">Dr. Akanksha Kharote</h3>
            <div className="space-y-3 mb-6">
              {qualifications.map((qualification, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-lg text-gray-700"
                >
                  <Stars className="w-5 h-5 text-[#BF6159]" />
                  <span>{qualification}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The founder of our brand, Dr.AKANKSHA has dedicated her entire career to the cosmetology and healthcare sector.
After extensive work experiences in healthcare Sector, Dr.Akanksha established HEMKANTI Brand with a sanskrit meaning Shining like a goldin the heart of Pune to provide Skin, Hair, Aesthetic Gynaecology along with HOMEOPATHIC treatments.
HEMKANTI Clinics has patients from various cities who have embarked to have their desired treatments from our top skin specialist’s team.

            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We love what we do and therefore it reflects on you. Beauty is one of the key aspects of once confidence. The issue of confidence is very important in beauty, as in everything else.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10 mb-16">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="text-3xl font-bold text-[#BF6159] mb-2">{achievement.value}</div>
            <div className="text-gray-600">{achievement.label}</div>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#BF6159] mb-4">Our Promise</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Hemkanti Clinics, we're committed to helping you achieve your best skin health through 
          a perfect blend of traditional wisdom and modern science. Every treatment is 
          personalized to your unique needs, ensuring optimal results and lasting beauty.
        </p>
      </div>

      <style jsx global>
        {`
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .shimmer-effect {
            animation: shimmer 3s infinite linear;
            background: linear-gradient(to right, #BF6159 4%, #FF8176 25%, #BF6159 36%);
            background-size: 1000px 100%;
          }
          .glow-text {
            text-shadow: 0 0 10px rgba(191, 97, 89, 0.3);
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
    </>
  );
};

export default AboutUs;
