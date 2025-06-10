import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      name: "Residential Construction",
      originalPrice: "₹2100/sq.ft",
      price: "₹1900/sq.ft",
      discount: "20% OFF",
      features: [
        "SK SUPER TMT FE-500",
        "ULTRATECH PPC CEMENT",
        "WIRE CUT BRICKS/CONCRETE BLOCKS",
        "FOSROC WATERPROOFING",
        "ASIAN PAINTS",
        "ARSHIRVAD PIPES",
        "HAVELLS/FINDOLEX"
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-[url('/assests/home-landing.jpg')] bg-cover bg-center px-4">
        <div className="text-center bg-black bg-opacity-70 p-8 rounded-lg max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ನಿಮ್ಮ ಕನಸಿನ ಮನೆಯನ್ನು ಕಟ್ಟೋಣ
          </h1>
          <p className="text-white mb-6">Build Your Dream House in Karnataka</p>
          <a 
            href="#services" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
          >
            Check Our Prices
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Construction Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                {/* Card Image: Fit to card width, maintain aspect ratio, crop if needed */}
                <div className="relative min-h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-auto min-h-48 object-cover"
                  />
                  {/* Optional semi-transparent overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4">{service.name}</h3>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-gray-500 line-through">{service.originalPrice}</span>
                  <span className="text-blue-600 font-bold">{service.price}</span>
                  <span className="bg-red-500 text-white text-xs py-1 px-2 rounded-full">
                    {service.discount}
                  </span>
                </div>
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
                {/* Increased Image Size */}
                <div className="h-24 w-24 flex items-center justify-center mb-4 rounded-full bg-white/30 backdrop-blur-sm">
                  {/* Icon: Use object-contain for transparent PNGs */}
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+918660646592" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +91 8660646592
            </a>
            <a 
              href="https://wa.me/918660646592" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372.-272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.03c.545-1.5.887-2.554 1.013-2.655.136-.108.233-.149.334-.149.099 0 .198.04.297.149.099.112.347.38.446.628.099.248.198.558.173.793-.025.238-.074.446-.223.719-.074.124-.173.26-.322.406-.173.174-.347.26-.446.26-.05 0-.099-.012-.148-.037-.05-.025-.272-.136-.52-.273-.248.-136-.414-.198-.57-.198-.198 0-.396.074-.544.372-.149.297-.595 1.184-.595 1.184s-.314.733-.408.943c-.099.198-.198.297-.347.446-.173.174-.396.347.-595.496-.198.149-.124.248.025.397.149.149.595.595 1.273.967.892.496 1.588.629 1.785.694.198.062.372.025.52-.025.149-.05.595-.298 1.013-.793.421-.496.595-.892.694-1.04.099-.149.124-.248.074-.397-.05-.149-.272-.396-.57-.694-.297-.298-.446-.446.-595-.595-.149-.149-.248-.248-.173-.397.074-.149.396-.843.595-1.488zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp: +91 8660646592
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
