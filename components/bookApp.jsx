import React, { useState, useEffect } from 'react';
import servicesData from '../app/services/services-data.json';

export default function BookAppointment({ formData, handleInputChange, closeModal }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [localFormData, setLocalFormData] = useState(formData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Retrieve saved form data from localStorage
    const savedFormData = localStorage.getItem('appointmentFormData');
    if (savedFormData) {
      try {
        const parsedData = JSON.parse(savedFormData);
        setLocalFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved form data:", error);
        setLocalFormData(formData); // Fallback
      }
    }

    // Set categories from services data
    setCategories(Object.entries(servicesData.categories || {}));
  }, [formData]);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Reset message before validation
  setMessage('');

  // Find the name of the category or service based on the selected ID
  const categoryName = categories.find(([name, _]) => name === localFormData.category)?.[0];
  const serviceName = localFormData.service
    ? servicesData.categories[categoryName]?.services.find((service) => service.id === localFormData.service)?.name
    : null;

  // Validate form inputs
  if (!validatePhone(localFormData.phone)) {
    setMessage({ text: 'Please enter a valid phone number.', type: 'error' });
    return;
  }

  if (!validateEmail(localFormData.email)) {
    setMessage({ text: 'Please enter a valid email address.', type: 'error' });
    return;
  }

  if (new Date(localFormData.date) < new Date()) {
    setMessage({ text: 'Please select a future date.', type: 'error' });
    return;
  }

  if (!localFormData.time) {
    setMessage({ text: 'Please select a time.', type: 'error' });
    return;
  }

  if (!localFormData.category) {
    setMessage({ text: 'Please select a category.', type: 'error' });
    return;
  }

  const selectedCategory = categories.find(([name]) => name === localFormData.category);
  if (selectedCategory && selectedCategory[1]?.services?.length > 0 && !localFormData.service) {
    setMessage({
      text: 'Please select a service listed below for the chosen category.',
      type: 'error',
    });
    return;
  }

  // Ensure all required fields are filled out
  const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'category'];
  for (const field of requiredFields) {
    if (!localFormData[field]) {
      setMessage({ text: `Please fill out the ${field}.`, type: 'error' });
      return;
    }
  }

  setLoading(true);

  try {
    // Replace category ID with category name and service ID with service name
    const appointmentData = {
      ...localFormData,
      category: categoryName, // Use the category name
      service: serviceName, // Use the service name if available
    };

    const response = await fetch('/api/book_appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error Response:', errorResponse);
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.success) {
      setMessage({ text: 'Your appointment has been booked successfully!', type: 'success' });
      setTimeout(() => {
        closeModal();
        localStorage.removeItem('appointmentFormData');
      }, 5000);
    } else {
      setMessage({ text: result.message || 'There was an error. Please try again.', type: 'error' });
    }
  } catch (error) {
    console.error('Error:', error);
    setMessage({ text: `Something went wrong: ${error.message || 'Please try again.'}`, type: 'error' });
  } finally {
    setLoading(false);
  }
};


  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleInputChangeLocal = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] py-20 px-6 sm:px-8 lg:px-10 text-gray-700 relative">
      <div className="absolute top-0 left-0 w-28 h-28 bg-[#FFCCBC] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#BCAAA4] rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#8D6E63] text-white py-8 px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">Book Your Appointment</h2>
          <p className="text-lg sm:text-xl opacity-90">Ready to Glow? Your Skin Journey Begins Here!</p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#FFAB91] via-[#754737] to-[#8D6E63]"></div>

        <div className="p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
              { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
              { id: 'date', label: 'Preferred Date', type: 'date', placeholder: 'Enter your preferred date' },
              { id: 'time', label: 'Preferred Time', type: 'time', placeholder: 'Select a time' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={localFormData[id] || ''}
                  placeholder={placeholder}
                  onChange={handleInputChangeLocal}
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-[#754737] focus:outline-none transition-all duration-300 hover:shadow-md"
                  required
                />
              </div>
            ))}

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Select a Category</label>
              <select
                id="category"
                name="category"
                value={localFormData.category || ''}
                onChange={handleInputChangeLocal}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-[#FFF7F3] p-3 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#754737] focus:outline-none hover:shadow-md transition-all duration-300"
                required
              >
                <option value="" disabled>Choose a category</option>
                {categories.map(([categoryName, categoryData]) => (
                  <option key={categoryName} value={categoryName}>
                    {categoryData.icon} {categoryName}
                  </option>
                ))}
              </select>
            </div>

            {localFormData.category && categories.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-bold">Services in {localFormData.category}</h3>
                {categories
                  .filter(([categoryName]) => categoryName === localFormData.category)
                  .map(([categoryName, categoryData]) => (
                    <div key={categoryName}>
                      {categoryData.services.length === 0 ? (
                        <p>No services available in this category.</p>
                      ) : (
                        categoryData.services.map((service) => (
                          <div key={service.id} className="space-x-2">
                            <input
                              type="radio"
                              id={service.id}
                              name="service"
                              value={service.id}
                              checked={localFormData.service === service.id}
                              onChange={handleInputChangeLocal}
                              className="mr-2"
                            />
                            <label htmlFor={service.id}>{service.name}</label>
                          </div>
                        ))
                      )}
                    </div>
                  ))}
              </div>
            )}

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#754737] text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#FF5722] focus:outline-none"
              >
                {loading ? 'Booking...' : 'Book Now'}
              </button>
            </div>

            {message && (
              <p
                className={`mt-4 text-lg font-semibold ${message.type === 'success' ? 'text-green-500' : message.type === 'error' ? 'text-red-500' : 'text-blue-500'}`}
              >
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
