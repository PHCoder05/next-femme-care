"use client";
import React, { useState, useEffect } from "react";
import servicesData from "../app/services/services-data.json";
import { useRouter } from "next/navigation";
import { useBooking } from "../app/context/page";
import { LoadingSpinner } from "./LoadingSpinner";

const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

const REQUIRED_FIELDS = ["name", "email", "phone", "date", "time", "category"];

export default function BookAppointment({ formData, closeModal }) {
  const router = useRouter();
  const { setBookingData } = useBooking();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [localFormData, setLocalFormData] = useState(formData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      const savedFormData = localStorage.getItem("appointmentFormData");
      if (savedFormData) {
        setLocalFormData(JSON.parse(savedFormData));
      }
    } catch (error) {
      console.error("Error loading saved form data:", error);
      setLocalFormData(formData);
    }

    setCategories(Object.entries(servicesData.categories || {}));
  }, [formData]);

  const validateForm = () => {
    if (!validatePhone(localFormData.phone)) {
      return "Please enter a valid phone number.";
    }

    if (!validateEmail(localFormData.email)) {
      return "Please enter a valid email address.";
    }

    if (new Date(localFormData.date) < new Date()) {
      return "Please select a future date.";
    }

    if (!localFormData.time) {
      return "Please select a time.";
    }

    if (!localFormData.category) {
      return "Please select a category.";
    }

    const selectedCategory = categories.find(
      ([name]) => name === localFormData.category
    );
    if (selectedCategory?.[1]?.services?.length > 0 && !localFormData.service) {
      return "Please select a service listed below for the chosen category.";
    }

    for (const field of REQUIRED_FIELDS) {
      if (!localFormData[field]) {
        return `Please fill out the ${field}.`;
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start loading
    setLoading(true);
    setMessage("");

    try {
      const validationError = validateForm();
      if (validationError) {
        setMessage({ text: validationError, type: "error" });
        setLoading(false);
        return;
      }

      const categoryName = categories.find(
        ([name]) => name === localFormData.category
      )?.[0];

      const selectedCategory = servicesData.categories[categoryName];
      const serviceName =
        localFormData.service && selectedCategory
          ? selectedCategory.services.find(
              (service) => service.id === localFormData.service
            )?.name
          : null;

      const appointmentData = {
        name: localFormData.name,
        email: localFormData.email,
        phone: localFormData.phone,
        date: localFormData.date,
        time: localFormData.time,
        category: categoryName,
        service: serviceName || categoryName,
      };

      const response = await fetch("/api/book_appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (result.success) {
        // Set booking data with required fields for thank you page
        setBookingData({
          isComplete: true,
          timestamp: Date.now(),
          appointmentDetails: {
            ...appointmentData,
            date: localFormData.date,
            time: localFormData.time,
            service: serviceName || categoryName,
          },
        });

        localStorage.removeItem("appointmentFormData");
        if (closeModal) {
          closeModal();
        }
        router.push("/thank-you");
      } else {
        setMessage({
          text: result.message || "Booking failed. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        text: `Something went wrong: ${error.message}`,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] py-20 px-6 sm:px-8 lg:px-10 text-gray-700 relative">
      {bookingData.loading && <LoadingSpinner />}

      <div className="absolute top-0 left-0 w-28 h-28 bg-[#FFCCBC] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#BCAAA4] rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#8D6E63] text-white py-8 px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">
            Book Your Appointment
          </h2>
          <p className="text-lg sm:text-xl opacity-90">
            Ready to Glow? Your Skin Journey Begins Here!
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#FFAB91] via-[#754737] to-[#8D6E63]"></div>

        <div className="p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              {
                id: "name",
                label: "Your Name",
                type: "text",
                placeholder: "Enter your name",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "Enter your email",
              },
              {
                id: "phone",
                label: "Phone Number",
                type: "tel",
                placeholder: "Enter your phone number",
              },
              {
                id: "date",
                label: "Preferred Date",
                type: "date",
                placeholder: "Enter your preferred date",
              },
              {
                id: "time",
                label: "Preferred Time",
                type: "time",
                placeholder: "Select a time",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={localFormData[id] || ""}
                  placeholder={placeholder}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-[#754737] focus:outline-none transition-all duration-300 hover:shadow-md"
                  required
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700">
                Select a Category
              </label>
              <select
                id="category"
                name="category"
                value={localFormData.category || ""}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#754737] focus:outline-none hover:shadow-md transition-all duration-300"
                required>
                <option value="" disabled>
                  Choose a category
                </option>
                {categories.map(([categoryName, categoryData]) => (
                  <option key={categoryName} value={categoryName}>
                    {categoryData.icon} {categoryName}
                  </option>
                ))}
              </select>
            </div>

            {localFormData.category && categories.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-bold">
                  Services in {localFormData.category}
                </h3>
                {categories
                  .find(
                    ([categoryName]) => categoryName === localFormData.category
                  )?.[1]
                  .services.map((service) => (
                    <div key={service.id} className="space-x-2">
                      <input
                        type="radio"
                        id={service.id}
                        name="service"
                        value={service.id}
                        checked={localFormData.service === service.id}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor={service.id}>{service.name}</label>
                    </div>
                  ))}
              </div>
            )}

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#754737] text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#FF5722] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Booking..." : "Book Now"}
              </button>
            </div>

            {message && (
              <p
                className={`mt-4 text-lg font-semibold ${
                  message.type === "success"
                    ? "text-green-500"
                    : message.type === "error"
                    ? "text-red-500"
                    : "text-blue-500"
                }`}>
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
