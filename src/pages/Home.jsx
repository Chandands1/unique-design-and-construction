import { Link } from 'react-router-dom';
import Projects from './Projects';


export default function Home() {
  const services = [
    {
      name: "Residential Construction",
      price: "₹1900/sq.ft",
      features: [
        "SK SUPER TMT FE-500",
        "ULTRATECH PPC CEMENT",
        "WIRE CUT BRICKS/CONCRETE BLOCKS",
        "FOSROC WATERPROOFING",
        "ASIAN PAINTS",
        "ASHIRVAD PIPES",
        "HAVELLS/FINOLEX"
      ],
      image: "/assests/Modern-double-storey-home.jpg"
    }
  ]; 

  const benefits = [
    {
      text: "Multiple Architectural Designs",
      icon: "/assests/Multiple-archetecture-designs.jpg"
    },
    {
      text: "100% Transparent Services",
      icon: "/assests/100-satisfaction-guarantee-100-satisfaction-guarantee-badge-11562919018kscvvotyt9.png"
    },
    {
      text: "Hassle free Construction",
      icon: "/assests/hassle-free-construction.jpg"
    },
    {
      text: "No Compromise on Quality",
      icon: "/assests/Quality.png"
    },
    {
      text: "24x7 CCTV surveillance of site",
      icon: "/assests/cctv.webp"
    },
    {
      text: "No Hidden Charges",
      icon: "/assests/No-Hidden-Charges.webp"
    },
    {
      text: "Free Waterproofing",
      icon: "/assests/free-waterprofing.webp"
    },
    {
      text: "On-time delivery",
      icon: "/assests/on-time-delivery.jpg"
    }
  ];

  const offeredServices = [
    "Building Construction",
    "Interior",
    "3D Floor Plan",
    "3D Elevation",
    "Structural Drawing",
    "Plan Sanction",
    "Bank Estimation"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[url('/assests/home-landing.jpg')] bg-cover bg-center px-4">
        <div className="text-center bg-black bg-opacity-70 p-8 rounded-lg max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ನಿಮ್ಮ ಕನಸಿನ ಮನೆಯನ್ನು ಕಟ್ಟೋಣ
          </h1>
          <p className="text-white mb-6">Build Your Dream House in Karnataka</p>
          <div className="flex flex-col gap-4">
            <a 
              href="#offered-services" 
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg text-lg"
            >
              Our Services
            </a> 
            <a 
              href="#services" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Check Our Prices
            </a>
           
            <Link 
              to="/projects" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="offered-services" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <ul className="max-w-lg mx-auto space-y-4 text-left">
            {offeredServices.map((service, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <span className="h-3 w-3 rounded-full bg-purple-600 inline-block"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Construction Packages */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Construction Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="relative min-h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-auto min-h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{service.name}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-4">
                  Starts from <span className="text-2xl font-bold">{service.price}</span>
                </p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+918660646592" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium block"
                >
                  Call for Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-center flex flex-col items-center"
              >
                <div className="h-24 w-24 flex items-center justify-center mb-4 rounded-full bg-white/30 backdrop-blur-sm">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.text} 
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <p className="font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to start your construction?</h2>
          <p className="mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and quote for your dream home in Karnataka.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a 
              href="tel:+918660646592" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              📞 Call: +91 8660646592
            </a>
            <a 
              href="https://wa.me/918660646592" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              💬 WhatsApp: +91 8660646592
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/unique_designs_nd_construction/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/share/1BpzjGMhj8/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
