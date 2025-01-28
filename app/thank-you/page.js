"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, Home, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] min-h-screen py-20 px-6 sm:px-8 lg:px-10 text-gray-700 relative">
      <div className="absolute top-0 left-0 w-28 h-28 bg-[#FFCCBC] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#BCAAA4] rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#8D6E63] text-white py-8 px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">
            Thank You!
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Your appointment has been successfully booked
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#FFAB91] via-[#754737] to-[#8D6E63]"></div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-[#FFF7F3] rounded-full mx-auto flex items-center justify-center">
              <Calendar className="w-12 h-12 text-[#754737]" />
            </div>
            <p className="text-xl text-gray-600">
              We've sent a confirmation email with all the details of your
              appointment.
            </p>
          </div>

          <div className="bg-[#FFF7F3] rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-[#754737] mb-4">
              What's Next?
            </h2>
            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-[#754737] mt-1 flex-shrink-0" />
              <p>
                Please arrive 5-10 minutes before your scheduled appointment
                time.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="w-6 h-6 text-[#754737] mt-1 flex-shrink-0" />
              <p>
                If you need to reschedule, please contact us at least 24 hours
                in advance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-[#754737] text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#8D6E63] transition-colors duration-300">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 bg-white border-2 border-[#754737] text-[#754737] px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#FFF7F3] transition-colors duration-300">
              Browse Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
