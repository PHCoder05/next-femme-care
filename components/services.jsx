import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      image: '/images/home/services/woman-beauty-salon-face-treatment.jpg',
      title: 'Facial Treatments',
      items: [
        'Feel and live young.',
        'Attain and maintain acne-free, glass skin with aesthetic beauty trending facials for all skin types.',
        'Customized treatments tailored to your needs.',
      ],
    },
    {
      image: '/images/home/services/laser2.jpg',
      title: 'Laser Therapy',
    items: [
      'Skin Brightening with advanced laser treatments.',
      'Treat hyperpigmentation and melasma for a even skin tone.',
      'Remove unwanted tattoos and birthmarks using our advanced laser technology.',
      ],
    },
    {
      image: '/images/home/services/body.jpg',
      title: 'Body Treatments',
      items: [
        'Feel confident in your body with expert care.',
        'Non-invasive cosmetic procedure that targets the face, neck, and abdomen.',
       
      ],
    },
    {
      image: '/images/home/services/iStock-1353459858.jpg',
      title: 'Hair Reduction',
      items: [
        'Eliminate unwanted hair with our cutting-edge laser hair reduction services.',
        'A hygiene compliant beauty clinic.',
      ],
    },
  ];
  

  return (
    <div className="bg-[#FFF9F4] py-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6D4C41] tracking-wider">
          Our Services
        </h2>
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              <div className="relative w-full md:w-1/2 h-64 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }} loading="eager"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4 text-[#8D6E63]">
                  {service.title}
                </h3>
                <ul className="space-y-2 list-none">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-lg leading-relaxed"
                    >
                      <span className="text-[#D7A88C] mt-1">•</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Add "View All Services" Button */}
        <div className="text-center mt-12">
          <Link href="/services"
         className="inline-block px-6 py-3 text-lg font-medium text-white bg-[#8D6E63] rounded-full shadow-md hover:bg-[#6D4C41] transition duration-300">
              View All Services
          
          </Link>
        </div>
      </div>
    </div>
  );
}
