import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Contact Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a project in mind? Contact us for a free consultation.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Your Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea 
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4 text-xl" />
              <div>
                <h3 className="font-medium">Our Office</h3>
                <p className="text-gray-600">Mandya, Karnataka 571401</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-blue-600 mt-1 mr-4 text-xl" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+91 86606 46592</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-blue-600 mt-1 mr-4 text-xl" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">contact@uniquedesigns.com</p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-12 h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62225.47766362708!2d76.866745!3d12.5225975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7aa9b35cc537%3A0x49aab8c8b8c6b1a3!2sMandya%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}