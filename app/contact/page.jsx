"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling our clinic, sending us an email, or using our online booking system on the website. We recommend booking in advance, especially for popular treatments.",
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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed - Name: ${name}, Value: ${value}`); // Log form input changes
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started", form); // Log the form data when submitting

    setResponseMessage("");

    if (!form.name || !form.email || !form.message) {
      setResponseMessage("Please fill out all fields.");
      console.log("Form submission failed - Missing fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setResponseMessage("Please enter a valid email address.");
      console.log("Form submission failed - Invalid email");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending data to the server...");
      const res = await fetch('/api/contactus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
        console.log("Message sent successfully");
      } else {
        const errorData = await res.json();
        setResponseMessage(errorData.message || "Something went wrong!");
        console.log("Message sending failed: ", errorData.message || "Unknown error");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
      console.error("Error during form submission: ", error); // Log any error during the submission
    } finally {
      setIsSubmitting(false);
      console.log("Form submission finished");
    }
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gradient-to-r from-[#FFF5F3] via-[#FEE9E5] to-[#FFF5F3] py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#BF6159] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-700 text-lg">
            We'd love to hear from you. Reach out with any questions or feedback.
          </p>
          <div className="w-20 h-2 bg-[#BF6159] mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF6159]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF6159]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#BF6159]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#BF6159] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#A4504F] transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {responseMessage && (
              <div className="mt-6 text-center text-lg text-gray-800 bg-green-100 py-3 px-4 rounded-lg">
                {responseMessage}
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/home/about.jpg"
              alt="Contact Us"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg font-medium">
                <span className="font-bold text-[#BF6159]">Email:</span>{" "}
                support@hemkanti.com
              </p>
              <p className="text-gray-700 text-lg font-medium mt-4">
                <span className="font-bold text-[#BF6159]">Phone:</span> +919405631363
              </p>
              <p className="text-gray-700 text-lg font-medium mt-4">
                <span className="font-bold text-[#BF6159]">Address: </span>Hemkanti Clinics
                Off No:207, Commerce Centre,Shivar Garden Road, Pimple Saudagar, Pune, (MH),India -411017
              </p>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white mt-16 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#BF6159] text-center mb-6">
            Office Hours
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center text-gray-700 space-y-4 lg:space-y-0">
            <p>
              <span className="font-bold">Monday - Friday:</span> 11:00 AM - 8:00 PM
            </p>
            <p>
              <span className="font-bold">Saturday:</span> 11:00 AM - 8:00 PM
            </p>
            <p>
              <span className="font-bold">Sunday:</span>11:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto mt-12">
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
                    <h3 className="text-xl font-semibold text-[#6D4C41]">{faq.question}</h3>
                    <span className="text-[#BF6159] font-semibold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-4 text-[#6D4C41]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#BF6159] text-center mb-6">
            Find Us Here
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181298.44944431618!2d73.66293298569158!3d18.604728137703074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9967c1b93d3%3A0x5a6a5037b58b2699!2sHemkanti%20Clinic!5e0!3m2!1sen!2sin!4v1735117909172!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
