import { useState } from 'react';
import Image from 'next/image';

export default function FaqTestimonials() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling our clinics, sending us an email, or using our online booking system on the website. We recommend booking in advance, especially for popular treatments.",
    },
    {
      question: "Are your treatments safe?",
      answer:
        "Yes, all of our treatments are performed by licensed professionals using FDA-approved products and equipment. We prioritize the safety and comfort of our clients and ensure each treatment is tailored to your individual needs.",
    },
    {
      question: "Are there any side effects to the treatments?",
      answer:
        "Most of our treatments are non-invasive and have minimal to no side effects. However, some treatments like injectables or chemical peels may have temporary swelling, redness, or mild irritation. Our team will explain potential side effects during your consultation.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "I’ve been visiting Hemkanti for over a year, and I’m amazed by the results. My fine lines have significantly reduced, and my skin feels incredibly smooth. I couldn't be happier with my treatments!",
      name: "Ananya",
      location: "Pune",
    },
    {
      id: 2,
      text: "I struggled with acne for years, and after just a few treatments at Hemkanti, my skin looks so much clearer and healthier. The team took the time to listen and personalize my treatment plan. I feel so much more confident now!",
      name: "Rohit",
      location: "Pune",
    },
    {
      id: 3,
      text: "The entire experience at Hemkanti was amazing. The clinics is professional, and the staff is knowledgeable, friendly, and so caring. My facial left me feeling rejuvenated and glowing!",
      name: "Priya",
      location: "Pune",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#FFF9F4] py-16 px-6 sm:px-8 lg:px-10 text-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#6D4C41] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E0C9B5] rounded-lg p-4 hover:bg-[#FDE6D5] transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-2xl text-[#8D6E63]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#6D4C41] mb-8 text-center">
            What Our Clients Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
             <div className="mb-4 text-center">
  <img 
    src="/images/quote.png" 
    alt="Quote Icon" 
    className="img-fluid" 
    style={{ width: '40px', height: '40px' }} 
  />
</div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-4">
                  <h4 className="font-bold text-[#8D6E63] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
