"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, Home, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] min-h-screen py-20 px-6 sm:px-8 lg:px-12 text-gray-700 relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFCCBC] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#BCAAA4] rounded-full opacity-30 blur-3xl"></div>

      <div className="relative max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#8D6E63] text-white py-10 px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-wide">
            Thank You!
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Your appointment has been successfully booked.
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#FFAB91] via-[#754737] to-[#8D6E63]"></div>

        <div className="p-10 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-28 h-28 bg-[#FFF7F3] rounded-full mx-auto flex items-center justify-center shadow-lg">
              <Calendar className="w-16 h-16 text-[#754737]" />
            </div>
            <p className="text-xl text-gray-600">
              We've sent a confirmation email with all the details of your
              appointment.
            </p>
          </div>

          <div className="bg-[#FFF7F3] rounded-lg p-8 space-y-6 shadow-md">
            <h2 className="text-2xl font-semibold text-[#754737] mb-6">
              What's Next?
            </h2>
            <div className="flex items-start space-x-4">
              <Clock className="w-7 h-7 text-[#754737] mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">
                Please arrive 5-10 minutes before your scheduled appointment
                time.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="w-7 h-7 text-[#754737] mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">
                If you need to reschedule, please contact us at least 24 hours
                in advance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 bg-[#754737] text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:bg-[#8D6E63] transition-all duration-300">
              <Home className="w-6 h-6" />
              Return Home
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center gap-3 bg-white border-2 border-[#754737] text-[#754737] px-8 py-4 rounded-xl font-semibold shadow-xl hover:bg-[#FFF7F3] transition-all duration-300">
              Browse Services
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Calendar, Clock, Home, ArrowRight, Check } from "lucide-react";
// import { useBooking } from "../context/page";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ThankYou() {
//   const router = useRouter();
//   const { bookingData, resetBooking } = useBooking();
//   const { isComplete, timestamp, appointmentDetails } = bookingData;

//   useEffect(() => {
//     const MAX_TIME = 5 * 60 * 1000; // 5 minutes

//     if (!isComplete || !timestamp || Date.now() - timestamp > MAX_TIME) {
//       router.push("/");
//       return;
//     }

//     return () => {
//       resetBooking();
//     };
//   }, [isComplete, timestamp, router, resetBooking]);

//   if (!isComplete) {
//     return null;
//   }

//   return (
//     <AnimatePresence>
//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         className="bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] min-h-screen py-20 px-6 sm:px-8 lg:px-10 text-gray-700 relative">
//         <div className="absolute top-0 left-0 w-28 h-28 bg-[#FFCCBC] rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#BCAAA4] rounded-full opacity-20 blur-3xl"></div>

//         <motion.div
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="bg-[#8D6E63] text-white py-8 px-6 text-center">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
//               <Check className="w-10 h-10 text-[#754737]" />
//             </motion.div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">
//               Thank You!
//             </h1>
//             <p className="text-lg sm:text-xl opacity-90">
//               Your appointment has been successfully booked
//             </p>
//           </div>

//           <div className="h-1 bg-gradient-to-r from-[#FFAB91] via-[#754737] to-[#8D6E63]"></div>

//           <div className="p-8 space-y-8">
//             {appointmentDetails && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-[#FFF7F3] rounded-lg p-6">
//                 <h2 className="text-xl font-bold text-[#754737] mb-4">
//                   Appointment Details
//                 </h2>
//                 <div className="space-y-3">
//                   <p>
//                     <span className="font-semibold">Service:</span>{" "}
//                     {appointmentDetails.service}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Date:</span>{" "}
//                     {new Date(appointmentDetails.date).toLocaleDateString()}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Time:</span>{" "}
//                     {appointmentDetails.time}
//                   </p>
//                 </div>
//               </motion.div>
//             )}

//             <div className="bg-[#FFF7F3] rounded-lg p-6 space-y-4">
//               <h2 className="text-2xl font-bold text-[#754737] mb-4">
//                 What's Next?
//               </h2>
//               <div className="flex items-start space-x-3">
//                 <Clock className="w-6 h-6 text-[#754737] mt-1 flex-shrink-0" />
//                 <p>
//                   Please arrive 5-10 minutes before your scheduled appointment
//                   time.
//                 </p>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <Calendar className="w-6 h-6 text-[#754737] mt-1 flex-shrink-0" />
//                 <p>
//                   If you need to reschedule, please contact us at least 24 hours
//                   in advance.
//                 </p>
//               </div>
//             </div>

//             <motion.div
//               className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}>
//               <Link
//                 href="/"
//                 className="flex items-center justify-center gap-2 bg-[#754737] text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#8D6E63] transition-colors duration-300">
//                 <Home className="w-5 h-5" />
//                 Return Home
//               </Link>
//               <Link
//                 href="/services"
//                 className="flex items-center justify-center gap-2 bg-white border-2 border-[#754737] text-[#754737] px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#FFF7F3] transition-colors duration-300">
//                 Browse Services
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </motion.div>
//           </div>
//         </motion.div>
//       </motion.section>
//     </AnimatePresence>
//   );
// }
