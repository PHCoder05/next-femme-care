"use client";

import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8F1] to-[#FDEFE3] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#754737] text-white px-6 py-3 rounded-md hover:bg-[#8D6E63] transition-colors">
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
