import React, { useState, useEffect } from "react";
import { X, PhoneCall, Calendar } from "lucide-react";

const ScreenCarePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`z-1000000 fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isClosing ? "animate-fade-out" : "animate-fade-in"
      }`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup Content */}
      <div
        className={`z-500000000 relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all 
    ${isClosing ? "animate-fade-out" : "animate-fade-in"} 
    sm:mt-4 sm:mb-8 sm:top-auto sm:relative`}
        style={{
          marginTop: "0", // Default for larger screens
          marginBottom: "0",
          top: "%", // Example positioning for larger screens.
        }}>
        {/* Close Button - Enhanced positioning and styling */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-50 rounded-full bg-white/90 p-1.5 shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300">
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Hero Image */}
        <div className="z-10000000 relative h-full w-full bg-gradient-to-r from-blue-100 to-purple-000">
          <img
            src="/images/popup2.jpg"
            alt="Screen Protection"
            className="h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white"></h3>
            <p className="mt-2 text-sm text-gray-200"></p>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">
                🎉 Special Offer: 20% off on all premium treatments
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Limited time offer. Don't miss out!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col  gap-4">
              <button
                onClick={() => (window.location.href = "tel:+919405631363")}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </button>
              {/* <button
                onClick={() => (window.location.href = "/booking")}
                className="hidden sm:flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                <Calendar className="h-4 w-4" />
                Book Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCarePopup;
