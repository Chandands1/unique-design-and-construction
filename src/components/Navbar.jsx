import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Changed from <a> to <Link>

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            𝙐𝙉𝙄𝙌𝙐𝙀 𝘿𝙀𝙎𝙄𝙂𝙉𝙎 & 𝘾𝙊𝙉𝙎𝙏𝙍𝙐𝘾𝙏𝙄𝙊𝙉
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/portfolio" className="text-gray-800 hover:text-blue-600 transition">
            Portfolio
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Contact Buttons (can remain as regular <a> tags) */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:8660646592"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            <FaPhone className="mr-2" /> Call
          </a>
          <a
            href="https://wa.me/918660646592"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}