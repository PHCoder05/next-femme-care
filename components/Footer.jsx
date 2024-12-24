export default function Footer() {
  return (
    <footer className="bg-[#754737] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Hemkanti Clinics</h3>
          <p className="text-sm">
            Heal and Glow with our skincare clinic services
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition duration-300">
                About us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white transition duration-300">
                Products
              </a>
            </li>
            <li>
              <a href="https://www.blogs.hemkanti.com" className="hover:text-white transition duration-300">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Policies and Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Policies</h4>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="hover:text-white transition duration-300">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            {/* <li>
              <a href="/policies/refund-policy" className="hover:text-white transition duration-300">
                Refund Policy
              </a>
            </li> */}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Pune, Maharashtra</li>
            <li>📞 +91 9405631363</li>
            <li>✉️ info@hemkanti.com</li>
            <li>⏰ Mon - Sat: 11:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 flex justify-center space-x-4">
        <a
          href="#"
          className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-500 transition"
        >
          <i className="fab fa-facebook-f text-white"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-blue-400 transition"
        >
          <i className="fab fa-twitter text-white"></i>
        </a>
        <a
          href="http://www.instagram.com/hemkanti.online"
          className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-red-500 transition"
        >
          <i className="fab fa-instagram text-white"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-gray-300 transition"
        >
          <i className="fab fa-linkedin-in text-white"></i>
        </a>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Made with ❤️ by Markyway</p>
        <p className="mt-2">
          <a href="/terms" className="hover:text-white transition duration-300">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy" className="hover:text-white transition duration-300">
            Privacy Policy
          </a>{" "}
          {/* <a href="/policies/refund-policy" className="hover:text-white transition duration-300">
            Refund Policy
          </a> */}
        </p>
      </div>
    </footer>
  );
}
