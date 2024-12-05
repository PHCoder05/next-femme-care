'use client'
import React from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-700">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-700 transition">
      Go Back Home
    </Link>
      </div>
    </div>
  );
}

export default NotFound;
