import React from 'react';

export default function WhyChooseHemkanti() {
  const features = [
    {
      title: 'Experienced Experts',
      description:
        'Our clinics is led by skilled professionals, dedicated to providing expert advice and proven solutions for your skin and hair care.',
      icon: 'fa-user-md',
    },
    {
      title: 'Personalized Care',
      description:
        'Experience the glow like never before with personalized care tailored to your skin, with exclusive offers and treatments designed just for you.',
      icon: 'fa-user-check',
    },
    {
      title: 'Latest Technology',
      description:
        'Stay ahead in skin care with cutting-edge treatments powered by the latest technology and US FDA APPROVED MACHINES at our clinics for safe and effective results.',
      icon: 'fa-microchip',
    },
    {
      title: 'Trusted, High-Quality Products',
      description:
        'Experience premium care with top-quality products at our clinics, designed to provide lasting results and maintain your skin’s health.',
      icon: 'fa-leaf',
    },
    {
      title: 'A Relaxing, Healing Space',
      description:
        'Give your skin and body the care they deserve in our healing space, where comfort meets expertise for a rejuvenating skincare journey.',
      icon: 'fa-spa',
    },
    {
      title: 'Comprehensive Follow-Up',
      description:
        'Achieve and maintain glowing skin with our clinics’s detailed follow-up care, customized to meet your unique needs and goals.',
      icon: 'fa-calendar-check',
    },
  ];
  
  return (
    <div className="bg-[#FDE6D5] py-12 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6D4C41]">
          Why Choose Hemkanti?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-[#6D4C41] text-5xl mb-4">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-[#6D4C41]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
