import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20"> {/* Account for fixed navbar */}
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
        <div className="text-center bg-black bg-opacity-50 p-12 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building Dreams with Smart Designs
          </h1>
          <div className="space-x-4">
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Home Construction",
              desc: "Turnkey solutions from foundation to finishing"
            },
            {
              title: "Architectural Designs",
              desc: "Custom 2D/3D plans tailored to your needs"
            },
            {
              title: "Interior Design",
              desc: "Modern aesthetics with functional spaces"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
              <Link 
                to="/services" 
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}