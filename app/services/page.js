

"use client"
import React, { useState, useEffect } from "react";
import { Search, Calendar, Star, ArrowRight, Clock, Filter, X, Heart, Share2, ChevronDown, Info } from "lucide-react";
import servicesData from './services-data.json';
import BookAppointmentModal from '../../components/BookAppointmentModal'; // Import the modal component
import Head from 'next/head';

const ServiceInterface = () => {
  const [activeTab, setActiveTab] = useState("Skin");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    // priceRange: "all",
    duration: "all",
    availability: "all"
  });
  const [favorites, setFavorites] = useState([]);
  const [showPromo, setShowPromo] = useState(true);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',

    date: ''
  });

  useEffect(() => {
    const services = servicesData.categories[activeTab].services;
    let results = services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Apply filters
    // if (filters.priceRange !== "all") {
    //   const [min, max] = filters.priceRange.split("-").map(Number);
    //   results = results.filter(service => service.price >= min && service.price <= max);
    // }
    if (filters.duration !== "all") {
      results = results.filter(service => service.duration.includes(filters.duration));
    }
    if (filters.availability !== "all") {
      results = results.filter(service => service.availableSlots.includes(filters.availability));
    }

    setFilteredServices(results);
  }, [searchTerm, activeTab, filters]);

  const toggleFavorite = (serviceId) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem('appointmentFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  };
  const toggleModal = (state) => {
    setShowModal(state);
  };
  const renderServiceCards = () =>
    filteredServices.map((service) => (
      <div
        key={service.id}
        className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-t-4 border-[#754737] group"
      >
        {service.badge && (
          <span className="absolute top-2 right-2 bg-[#754737] text-white text-xs font-semibold py-1 px-2 rounded-full">
            {service.badge}
          </span>
        )}
        <div className="absolute top-2 left-2 flex gap-2">
          <button 
            onClick={() => toggleFavorite(service.id)}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            {/* <Heart 
              className={`w-4 h-4 ${favorites.includes(service.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            /> */}
          </button>
          {/* <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors">
            <Share2 className="w-4 h-4 text-gray-400" />
          </button> */}
        </div>
        
        {/* <div className="flex items-center justify-center mb-4 text-[#754737] text-6xl group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div> */}
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          {/* <div className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{service.duration}</span>
          </div> */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-600">{service.rating}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          {/* <div className="text-lg font-bold text-[#754737]">₹{service.price}</div> */}
          <div className="flex flex-wrap gap-2">
            {service.benefits.map((benefit, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => {
            setSelectedService(service);
            toggleModal(true); // Open modal on "Book Now" click
          }}
          className="w-full px-4 py-2 bg-transparent border-2 border-[#754737] text-[#754737] rounded-full font-medium hover:bg-[#754737] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group"
        >
          Book Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
     
      </div>
    ));

  return (
    //SEO for Services
    <>
    <Head>
        <title>Services|Hemkanti</title>
        <meta 
          name="description" 
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more." 
        />
        <meta 
          name="keywords" 
          content="
            best skin care products in Pimple Saudagar, skin care centre near Kokane Chowk, hair coloring services, hair treatment centre near Kokane Chowk Pune, skin clinic, HydraFacial, hair loss treatment, skin brightening services, skin specialist, tattoo removal, laser hair reduction, birth mark removal, melasma treatment, laser hair removal, skin discoloration, Korean glass skin, vampire facial, best hair rebonding, skin care centre near me, hair loss issues
          "
        />
        <meta property="og:title" content="Best Skin Care & Hair Treatment Services Near Kokane Chowk" />
        <meta 
          property="og:description" 
          content="Discover the best skin care and hair treatment services near Kokane Chowk, including HydraFacial, skin brightening, hair loss treatment, tattoo removal, and more."
        />
        <meta property="og:image" content="/images/home/about.jpg" />
        <meta property="og:url" content="https://www.hemkanti.com/services" />
        <link rel="canonical" href="https://www.hemkanti.com/services" />
      </Head>
    
    
    
  
      <section className="bg-gradient-to-r from-[#FFF5F3] via-[#FEE9E5] to-[#FFF5F3] py-20 px-6 relative overflow-hidden">
      {showPromo && (
        // <div className="fixed top-0 left-0 right-0 bg-[#754737] text-white py-2 px-4 text-center z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-1" />
            {/* <p className="flex-1 text-center">Use code NEWCLIENT for 20% off your first service!</p> */}
            {/* <button onClick={() => setShowPromo(false)} className="flex-1 flex justify-end">
              <X className="w-4 h-4" />
            </button> */}
          {/* </div> */}
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Discover Your{" "}
          <span className="text-[#BF6159] relative">
            Glow
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#BF6159] opacity-20" />
          </span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our curated skincare and wellness services for all your beauty needs.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#754737] outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-white rounded-full border-2 border-gray-200 flex items-center gap-2"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Filters</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="max-w-4xl mx-auto mb-8 px-4">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                {/* <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({...prev, priceRange: e.target.value}))}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="all">All Prices</option>
                  <option value="0-100">Under $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-300">$200+</option>
                </select>
              </div>
              <div> */}
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  value={filters.duration}
                  onChange={(e) => setFilters(prev => ({...prev, duration: e.target.value}))}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="all">Any Duration</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90+ minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <select
                  value={filters.availability}
                  onChange={(e) => setFilters(prev => ({...prev, availability: e.target.value}))}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="all">Any Time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 overflow-hidden">
      {Object.keys(servicesData.categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === category
                ? "bg-[#754737] text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderServiceCards()}
        </div>
      </div>
        {/* Modal */}
        <BookAppointmentModal
        showModal={showModal}
        toggleModal={toggleModal}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </section>
    </>
  );
};

export default ServiceInterface;
