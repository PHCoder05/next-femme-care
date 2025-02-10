"use client";
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import BookAppointmentModal from './BookAppointmentModal'; // Import the reusable modal

const FloatingButtonWithModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem('appointmentFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleFormSubmit = () => {
    // Simple validation before submitting
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.time || !formData.date) {
      alert("Please fill in all fields.");
      return;
    }
    // Form submission logic here (e.g., sending data to a server)
    alert('Appointment booked successfully!');
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      time: '',
      date: ''
    });
    localStorage.removeItem('appointmentFormData');
  };

  const toggleModal = (state) => {
    setShowModal(state);
    if (!state) {
      resetForm(); // Reset form and clear localStorage when closing modal
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('appointmentFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData)); // Restore form data from localStorage
    }

    // Add the WATI widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?85789';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      const options = {
        "enabled": true,
        "chatButtonSetting": {
          "backgroundColor": "#00e785",
          "ctaText": "Chat with us",
          "borderRadius": "25",
          "marginLeft": "20",
          "marginRight": "32",
          "marginBottom": "100",
          "ctaIconWATI": false,
          "position": "right"
        },
        "brandSetting": {
          "brandName": "Hemkanti",
          "brandSubTitle": "undefined",
          "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
          "welcomeText": "Hi there!\nHow can I help you?",
          "messageText": "Hello, %0A I have a question about {{page_link}}",
          "backgroundColor": "#00e785",
          "ctaText": "Chat with us",
          "borderRadius": "25",
          "autoShow": false,
          "phoneNumber": "+919405631363"
        }
      };
      // Initialize the widget after the script is loaded
      window.CreateWhatsappChatWidget(options);
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        id="floating-btn"
        onClick={() => toggleModal(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#BF6159] to-[#A4504F] text-white py-4 px-8 rounded-full shadow-lg hover:from-[#A4504F] hover:to-[#8E3D3A] transform transition-all duration-300 ease-in-out hover:scale-105 z-50 group flex items-center gap-2"
        aria-label="Book Appointment"
      >
        <Plus className="w-5 h-5" />
        <span className="font-semibold">Book Appointment</span>
      </button>

      {/* Use the reusable modal component */}
      <BookAppointmentModal
        showModal={showModal}
        toggleModal={toggleModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default FloatingButtonWithModal;
