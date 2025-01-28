"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookingData, setBookingData] = useState({
    isComplete: false,
    timestamp: null,
    appointmentDetails: null,
    loading: false,
    error: null,
  });

  const setBookingComplete = (appointmentDetails) => {
    setBookingData({
      isComplete: true,
      timestamp: Date.now(),
      appointmentDetails,
      loading: false,
      error: null,
    });
  };

  const setLoading = (status) => {
    setBookingData((prev) => ({ ...prev, loading: status }));
  };

  const setError = (error) => {
    setBookingData((prev) => ({ ...prev, error }));
  };

  const resetBooking = () => {
    setBookingData({
      isComplete: false,
      timestamp: null,
      appointmentDetails: null,
      loading: false,
      error: null,
    });
  };

  return (
    <BookingContext.Provider
      value={{
        bookingData,
        setBookingComplete,
        setLoading,
        setError,
        resetBooking,
      }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
