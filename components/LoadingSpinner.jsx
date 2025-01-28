export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#754737]"></div>
        <p className="mt-4 text-gray-700 font-medium">
          Processing your booking...
        </p>
      </div>
    </div>
  );
}
