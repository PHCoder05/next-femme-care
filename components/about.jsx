import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F9F2F0] to-[#FDE6D5] text-black">
      <div className="max-w-6xl w-full px-6 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
    <Image
      src="/images/home/about.jpg"
      alt="Hemkanti Clinics"
      fill
      style={{ objectFit: 'cover' }} loading="eager"
      className="rounded-xl"
      title="Hemkanti Clinics"
    />
  </div>
</div>


          {/* Content Section */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-5xl font-bold text-[#6D4C41] mb-6 text-center md:text-left">
              About Us
            </h1>

            <div className="space-y-8">
              {/* Ambition Section */}
              <div>
                <h2 className="text-3xl font-semibold text-[#8D6E63] mb-3">
                  Our Ambition
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  At Hemkanti Clinics, we aim to bring our treatments, products, and expertise to a wider audience. We are committed to continuously researching and developing new lines of skincare treatments and products to meet the evolving needs of our clients.
                </p>
              </div>

              {/* Mission Section */}
              <div>
                <h2 className="text-3xl font-semibold text-[#8D6E63] mb-3">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Our mission is to empower our clients to embrace their natural beauty and live their best lives. We are dedicated to personalized care, ensuring each patient receives the best treatment for their needs. At Hemkanti Clinics, we treat each patient like family, prioritizing their well-being and feedback in every step of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
